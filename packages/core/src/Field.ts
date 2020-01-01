import Vector from './Vector';

export interface IField {
  xmin: number; // 一般格点数据是按照矩形范围来切割，所以定义其经纬度范围
  ymin: number;
  xmax: number;
  ymax: number;
  deltaX: number; // x（经度）增量
  deltaY: number; // y（维度）增量
  cols: number; // 列（可由 `(xmax - xmin) / deltaX` 得到）
  rows: number; // 行
  us: number[]; // U分量
  vs: number[]; // V分量
  wrapX: boolean;
}

export default class Field {
  private readonly xmin: number;
  private readonly xmax: number;
  private readonly ymin: number;
  private readonly ymax: number;
  private readonly cols: number;
  private readonly rows: number;
  private grid: null;
  private us: number[];
  private vs: number[];
  private isContinuous: boolean;
  private deltaY: number;
  private deltaX: number;
  private wrapX: boolean;

  constructor(params: IField) {
    this.grid = null;

    this.xmin = params.xmin;
    this.xmax = params.xmax;

    this.ymin = params.ymin;
    this.ymax = params.ymax;

    this.cols = params.cols;
    this.rows = params.rows;

    this.us = params.us;
    this.vs = params.vs;

    this.deltaX = params.deltaX;
    this.deltaY = params.deltaY;

    const cols = Math.ceil((this.xmax - this.xmin) / params.deltaX);
    const rows = Math.ceil((this.ymax - this.ymin) / params.deltaY);

    if (cols !== this.cols || rows !== this.rows) {
      console.warn('The data grid is not available');
    }

    this.isContinuous = Math.floor(this.cols * params.deltaX) >= 360;
    this.wrapX = params.wrapX;
  }

  buildGrid() {
    // grid = [];
    // var p = 0;
    // var isContinuous = Math.floor(ni * Δλ) >= 360;
    //
    // for (var j = 0; j < nj; j++) {
    //   var row = [];
    //   for (var i = 0; i < ni; i++, p++) {
    //     row[i] = builder.data(p);
    //   }
    //   if (isContinuous) {
    //     row.push(row[0]);
    //   }
    //   grid[j] = row;
    // }

    let grid = [];
    let p = 0;

    const { rows, cols, us, vs } = this;

    for (let j = 0; j < rows; j++) {
      const row = [];
      for (let i = 0; i < cols; i++, p++) {
        let u = us[p];
        let v = vs[p];
        let valid = this.isValid(u) && this.isValid(v);
        row[i] = valid ? new Vector(u, v) : null;
      }

      if (this.isContinuous) {
        // For wrapped grids, duplicate first column as last column to simplify interpolation logic
        row.push(row[0]);
      }
      grid[j] = row;
    }
    return grid;
  }

  release() {
    this.grid = [];
  }

  /**
   * Bilinear interpolation for Vector
   * https://en.wikipedia.org/wiki/Bilinear_interpolation
   * @param   {Number} x
   * @param   {Number} y
   * @param   {Number[]} g00
   * @param   {Number[]} g10
   * @param   {Number[]} g01
   * @param   {Number[]} g11
   * @returns {Vector}
   */
  bilinearInterpolateVector(
    x: number, y: number,
    g00: { u: number; v: number; },
    g10: { u: number; v: number; },
    g01: { u: number; v: number; },
    g11: { u: number; v: number; }
  ) {
    const rx = 1 - x;
    const ry = 1 - y;

    const a = rx * ry;
    const b = x * ry;
    const c = rx * y;
    const d = x * y;
    const u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
    const v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
    return new Vector(u, v);
  }

  calculateRange() {

  }

  /**
   * 检查 uv是否合法
   * @param x
   * @private
   */
  isValid(x: any) {
    return x !== null && x !== undefined;
  }

  /**
   * Nearest value at lon-lat coordinates
   * @param lon
   * @param lat
   */
  valueAt(lon: number, lat: number) {

    if (!this.contains(lon, lat)) return null;

    const indexes = this._getDecimalIndexes(lon, lat);
    let value = this._valueAtIndexes(indexes[0], indexes[1]);
    return new Vector(value[0], value[1]);
  }

  hasValueAt(lon: number, lat: number) {
    let value = this.valueAt(lon, lat);
    const hasValue = value !== null;
    let included = true;
    return hasValue && included;
  }

  // var interpolate = function (λ, φ) {
  //
  //   if (!grid) return null;
  //
  //   var i = floorMod(λ - λ0, 360) / Δλ;  // calculate longitude index in wrapped range [0, 360)
  //   var j = (φ0 - φ) / Δφ;                 // calculate latitude index in direction +90 to -90
  //
  //   var fi = Math.floor(i), ci = fi + 1;
  //   var fj = Math.floor(j), cj = fj + 1;
  //
  //   var row;
  //   if ((row = grid[fj])) {
  //     var g00 = row[fi];
  //     var g10 = row[ci];
  //     if (isValue(g00) && isValue(g10) && (row = grid[cj])) {
  //       var g01 = row[fi];
  //       var g11 = row[ci];
  //       if (isValue(g01) && isValue(g11)) {
  //         // All four points found, so interpolate the value.
  //         return builder.interpolate(i - fi, j - fj, g00, g10, g01, g11);
  //       }
  //     }
  //   }
  //   return null;
  // };

  interpolatePoint(i, j) {
    //         1      2           After converting λ and φ to fractional grid indexes i and j, we find the
    //        fi  i   ci          four points 'G' that enclose point (i, j). These points are at the four
    //         | =1.4 |           corners specified by the floor and ceiling of i and j. For example, given
    //      ---G--|---G--- fj 8   i = 1.4 and j = 8.3, the four surrounding grid points are (1, 8), (2, 8),
    //    j ___|_ .   |           (1, 9) and (2, 9).
    //  =8.3   |      |
    //      ---G------G--- cj 9   Note that for wrapped grids, the first column is duplicated as the last
    //         |      |           column, so the index ci can be used without taking a modulo.
    const indexes = this._getFourSurroundingIndexes(i, j);
    const [fi, ci, fj, cj] = indexes;
    let values = this._getFourSurroundingValues(fi, ci, fj, cj);
    values = values.map((v) => new Vector(v[0], v[1]));

    if (values) {
      const [g00, g10, g01, g11] = values;
      return this._doInterpolation(i - fi, j - fj, g00, g10, g01, g11);
    }
    return null;
  }

  /**
   * Value for grid indexes
   * @param   {Number} i - column index (integer)
   * @param   {Number} j - row index (integer)
   * @returns {Vector|Number}
   */
  valueAtIndexes(i: number, j: number) {
    if (!this.grid) return null;
    // @ts-ignore
    return this.grid[j][i]; // <-- j,i !!
  }

  /**
   * Lon-Lat for grid indexes
   * @param   {Number} i - column index (integer)
   * @param   {Number} j - row index (integer)
   * @returns {Number[]} [lon, lat]
   */
  lonLatAtIndexes(i: number, j: number) {
    let lon = this._longitudeAtX(i);
    let lat = this._latitudeAtY(j);

    return [lon, lat];
  }

  /**
   * Longitude for grid-index
   * @param   {Number} i - column index (integer)
   * @returns {Number} longitude at the center of the cell
   */
  _longitudeAtX(i: number) {
    let halfXPixel = this.deltaX / 2.0;
    let lon = this.xmin + halfXPixel + i * this.deltaX;
    if (this.wrapX) {
      lon = lon > 180 ? lon - 360 : lon;
    }
    return lon;
  }

  /**
   * Latitude for grid-index
   * @param   {Number} j - row index (integer)
   * @returns {Number} latitude at the center of the cell
   */
  _latitudeAtY(j: number) {
    let halfYPixel = this.deltaY / 2.0;
    return this.ymax - halfYPixel - j * this.deltaY;
  }

  randomize(o: any = {}) {

    // field.randomize = function (o) {  // UNDONE: this method is terrible
    //   var x, y;
    //   var safetyNet = 0;
    //   do {
    //     x = Math.round(Math.floor(Math.random() * bounds.width) + bounds.x);
    //     y = Math.round(Math.floor(Math.random() * bounds.height) + bounds.y)
    //   } while (field(x, y)[2] === null && safetyNet++ < 30);
    //   o.x = x;
    //   o.y = y;
    //   return o;
    // };

    let i = (Math.random() * this.cols) | 0;
    let j = (Math.random() * this.rows) | 0;

    o.x = this._longitudeAtX(i);
    o.y = this._latitudeAtY(j);

    return o;
  }
}