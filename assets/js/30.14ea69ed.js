(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{640:function(t,e,r){"use strict";e.a={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"}},678:function(t,e,r){"use strict";var n,i=r(737),o=r(679),a=r(631),s=r(648),u=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h="length",c=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.element=r,i.index=n,i}return u(e,t),e}(s.a),f=function(t){function e(e,r){var n=t.call(this)||this,i=r||{};if(n.unique_=!!i.unique,n.array_=e||[],n.unique_)for(var o=0,a=n.array_.length;o<a;++o)n.assertUnique_(n.array_[o],o);return n.updateLength_(),n}return u(e,t),e.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},e.prototype.extend=function(t){for(var e=0,r=t.length;e<r;++e)this.push(t[e]);return this},e.prototype.forEach=function(t){for(var e=this.array_,r=0,n=e.length;r<n;++r)t(e[r],r,e)},e.prototype.getArray=function(){return this.array_},e.prototype.item=function(t){return this.array_[t]},e.prototype.getLength=function(){return this.get(h)},e.prototype.insertAt=function(t,e){this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new c(o.a.ADD,e,t))},e.prototype.pop=function(){return this.removeAt(this.getLength()-1)},e.prototype.push=function(t){this.unique_&&this.assertUnique_(t);var e=this.getLength();return this.insertAt(e,t),this.getLength()},e.prototype.remove=function(t){for(var e=this.array_,r=0,n=e.length;r<n;++r)if(e[r]===t)return this.removeAt(r)},e.prototype.removeAt=function(t){var e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new c(o.a.REMOVE,e,t)),e},e.prototype.setAt=function(t,e){var r=this.getLength();if(t<r){this.unique_&&this.assertUnique_(e,t);var n=this.array_[t];this.array_[t]=e,this.dispatchEvent(new c(o.a.REMOVE,n,t)),this.dispatchEvent(new c(o.a.ADD,e,t))}else{for(var i=r;i<t;++i)this.insertAt(i,void 0);this.insertAt(t,e)}},e.prototype.updateLength_=function(){this.set(h,this.array_.length)},e.prototype.assertUnique_=function(t,e){for(var r=0,n=this.array_.length;r<n;++r)if(this.array_[r]===t&&r!==e)throw new i.a(58)},e}(a.a);e.a=f},679:function(t,e,r){"use strict";e.a={ADD:"add",REMOVE:"remove"}},714:function(t,e,r){"use strict";var n,i=r(612),o=r(631),a=r(621),s=r(640),u=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),h=function(t){function e(e){var r=t.call(this)||this;return r.projection_=Object(a.get)(e.projection),r.attributions_=c(e.attributions),r.attributionsCollapsible_=void 0===e.attributionsCollapsible||e.attributionsCollapsible,r.loading=!1,r.state_=void 0!==e.state?e.state:s.a.READY,r.wrapX_=void 0!==e.wrapX&&e.wrapX,r}return u(e,t),e.prototype.getAttributions=function(){return this.attributions_},e.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolutions=function(){return Object(i.b)()},e.prototype.getState=function(){return this.state_},e.prototype.getWrapX=function(){return this.wrapX_},e.prototype.refresh=function(){this.changed()},e.prototype.setAttributions=function(t){this.attributions_=c(t),this.changed()},e.prototype.setState=function(t){this.state_=t,this.changed()},e}(o.a);function c(t){return t?Array.isArray(t)?function(e){return t}:"function"==typeof t?t:function(e){return[t]}:null}e.a=h},745:function(t,e,r){"use strict";e.a={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},747:function(t,e,r){t.exports=function t(e,r,n){function i(a,s){if(!r[a]){if(!e[a]){if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var h=r[a]={exports:{}};e[a][0].call(h.exports,(function(t){var r=e[a][1][t];return i(r||t)}),h,h.exports,t,e,r,n)}return r[a].exports}for(var o=!1,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){"use strict";e.exports=i,e.exports.default=i;var n=t("quickselect");function i(t,e){if(!(this instanceof i))return new i(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function o(t,e,r){if(!r)return e.indexOf(t);for(var n=0;n<e.length;n++)if(r(t,e[n]))return n;return-1}function a(t,e){s(t,0,t.children.length,e,t)}function s(t,e,r,n,i){i||(i=_(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var o,a=e;a<r;a++)o=t.children[a],u(i,t.leaf?n(o):o);return i}function u(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function l(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function m(t,e,r,i,o){for(var a,s=[e,r];s.length;)(r=s.pop())-(e=s.pop())<=i||(a=e+Math.ceil((r-e)/i/2)*i,n(t,a,e,r,o),s.push(e,a,a,r))}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,r=[],n=this.toBBox;if(!d(t,e))return r;for(var i,o,a,s,u=[];e;){for(i=0,o=e.children.length;i<o;i++)a=e.children[i],d(t,s=e.leaf?n(a):a)&&(e.leaf?r.push(a):p(t,s)?this._all(a,r):u.push(a));e=u.pop()}return r},collides:function(t){var e=this.data,r=this.toBBox;if(!d(t,e))return!1;for(var n,i,o,a,s=[];e;){for(n=0,i=e.children.length;n<i;n++)if(o=e.children[n],d(t,a=e.leaf?r(o):o)){if(e.leaf||p(t,a))return!0;s.push(o)}e=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,r=t.length;e<r;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var i=this.data;this.data=n,n=i}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=_([]),this},remove:function(t,e){if(!t)return this;for(var r,n,i,a,s=this.data,u=this.toBBox(t),h=[],c=[];s||h.length;){if(s||(s=h.pop(),n=h[h.length-1],r=c.pop(),a=!0),s.leaf&&-1!==(i=o(t,s.children,e)))return s.children.splice(i,1),h.push(s),this._condense(h),this;a||s.leaf||!p(s,u)?n?(r++,s=n.children[r],a=!1):s=null:(h.push(s),c.push(r),r=0,n=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:h,compareMinY:c,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var r=[];t;)t.leaf?e.push.apply(e,t.children):r.push.apply(r,t.children),t=r.pop();return e},_build:function(t,e,r,n){var i,o=r-e+1,s=this._maxEntries;if(o<=s)return a(i=_(t.slice(e,r+1)),this.toBBox),i;n||(n=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,n-1))),(i=_([])).leaf=!1,i.height=n;var u,h,c,f,l=Math.ceil(o/s),p=l*Math.ceil(Math.sqrt(s));for(m(t,e,r,p,this.compareMinX),u=e;u<=r;u+=p)for(m(t,u,c=Math.min(u+p-1,r),l,this.compareMinY),h=u;h<=c;h+=l)f=Math.min(h+l-1,c),i.children.push(this._build(t,h,f,n-1));return a(i,this.toBBox),i},_chooseSubtree:function(t,e,r,n){for(var i,o,a,s,u,h,c,l,p,d;n.push(e),!e.leaf&&n.length-1!==r;){for(c=l=1/0,i=0,o=e.children.length;i<o;i++)u=f(a=e.children[i]),p=t,d=a,(h=(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-u)<l?(l=h,c=u<c?u:c,s=a):h===l&&u<c&&(c=u,s=a);e=s||e.children[0]}return e},_insert:function(t,e,r){var n=this.toBBox,i=r?t:n(t),o=[],a=this._chooseSubtree(i,this.data,e,o);for(a.children.push(t),u(a,i);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(i,o,e)},_split:function(t,e){var r=t[e],n=r.children.length,i=this._minEntries;this._chooseSplitAxis(r,i,n);var o=this._chooseSplitIndex(r,i,n),s=_(r.children.splice(o,r.children.length-o));s.height=r.height,s.leaf=r.leaf,a(r,this.toBBox),a(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(r,s)},_splitRoot:function(t,e){this.data=_([t,e]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,r){var n,i,o,a,u,h,c,l,p,d,_,m,v,y;for(h=c=1/0,n=e;n<=r-e;n++)i=s(t,0,n,this.toBBox),o=s(t,n,r,this.toBBox),p=i,d=o,_=void 0,m=void 0,v=void 0,y=void 0,_=Math.max(p.minX,d.minX),m=Math.max(p.minY,d.minY),v=Math.min(p.maxX,d.maxX),y=Math.min(p.maxY,d.maxY),a=Math.max(0,v-_)*Math.max(0,y-m),u=f(i)+f(o),a<h?(h=a,l=n,c=u<c?u:c):a===h&&u<c&&(c=u,l=n);return l},_chooseSplitAxis:function(t,e,r){var n=t.leaf?this.compareMinX:h,i=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,r,n)<this._allDistMargin(t,e,r,i)&&t.children.sort(n)},_allDistMargin:function(t,e,r,n){t.children.sort(n);var i,o,a=this.toBBox,h=s(t,0,e,a),c=s(t,r-e,r,a),f=l(h)+l(c);for(i=e;i<r-e;i++)o=t.children[i],u(h,t.leaf?a(o):o),f+=l(h);for(i=r-e-1;i>=e;i--)o=t.children[i],u(c,t.leaf?a(o):o),f+=l(c);return f},_adjustParentBBoxes:function(t,e,r){for(var n=r;n>=0;n--)u(e[n],t)},_condense:function(t){for(var e,r=t.length-1;r>=0;r--)0===t[r].children.length?r>0?(e=t[r-1].children).splice(e.indexOf(t[r]),1):this.clear():a(t[r],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},{quickselect:2}],2:[function(t,e,r){"use strict";function n(t,e,r,n,a){!function t(e,r,n,o,a){for(;o>n;){if(o-n>600){var s=o-n+1,u=r-n+1,h=Math.log(s),c=.5*Math.exp(2*h/3),f=.5*Math.sqrt(h*c*(s-c)/s)*(u-s/2<0?-1:1),l=Math.max(n,Math.floor(r-u*c/s+f)),p=Math.min(o,Math.floor(r+(s-u)*c/s+f));t(e,r,l,p,a)}var d=e[r],_=n,m=o;for(i(e,n,r),a(e[o],d)>0&&i(e,n,o);_<m;){for(i(e,_,m),_++,m--;a(e[_],d)<0;)_++;for(;a(e[m],d)>0;)m--}0===a(e[n],d)?i(e,n,m):(m++,i(e,m,o)),m<=r&&(n=m+1),r<=m&&(o=m-1)}}(t,e,r||0,n||t.length-1,a||o)}function i(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function o(t,e){return t<e?-1:t>e?1:0}e.exports=n,e.exports.default=n},{}]},{},[1])(1)},853:function(t,e,r){"use strict";r.r(e);var n=r(612),i=r(678),o=r(679),a=r(695),s=r(617),u=r(620),h=r(635),c=r(648),f=r(614),l=r(607),p=r(632),d=r(745),_=!1;function m(t,e){return function(t,e,r,n){return function(i,o,a){var s=new XMLHttpRequest;s.open("GET","function"==typeof t?t(i,o,a):t,!0),e.getType()==d.a.ARRAY_BUFFER&&(s.responseType="arraybuffer"),s.withCredentials=_,s.onload=function(t){if(!s.status||s.status>=200&&s.status<300){var o=e.getType(),u=void 0;o==d.a.JSON||o==d.a.TEXT?u=s.responseText:o==d.a.XML?(u=s.responseXML)||(u=(new DOMParser).parseFromString(s.responseText,"application/xml")):o==d.a.ARRAY_BUFFER&&(u=s.response),u?r.call(this,e.readFeatures(u,{extent:i,featureProjection:a}),e.readProjection(u)):n.call(this)}else n.call(this)}.bind(this),s.onerror=function(){n.call(this)}.bind(this),s.send()}}(t,e,(function(t,e){"function"==typeof this.addFeatures&&this.addFeatures(t)}),p.c)}function v(t,e){return[[-1/0,-1/0,1/0,1/0]]}var y=r(622),g=r(714),x=r(640),E="addfeature",b="changefeature",F="clear",X="removefeature",I=r(747),O=r.n(I),R=function(){function t(t){this.rbush_=new O.a(t),this.items_={}}return t.prototype.insert=function(t,e){var r={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(r),this.items_[Object(n.c)(e)]=r},t.prototype.load=function(t,e){for(var r=new Array(e.length),i=0,o=e.length;i<o;i++){var a=t[i],s=e[i],u={minX:a[0],minY:a[1],maxX:a[2],maxY:a[3],value:s};r[i]=u,this.items_[Object(n.c)(s)]=u}this.rbush_.load(r)},t.prototype.remove=function(t){var e=Object(n.c)(t),r=this.items_[e];return delete this.items_[e],null!==this.rbush_.remove(r)},t.prototype.update=function(t,e){var r=this.items_[Object(n.c)(e)],i=[r.minX,r.minY,r.maxX,r.maxY];Object(l.p)(i,t)||(this.remove(e),this.insert(t,e))},t.prototype.getAll=function(){return this.rbush_.all().map((function(t){return t.value}))},t.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map((function(t){return t.value}))},t.prototype.forEach=function(t){return this.forEach_(this.getAll(),t)},t.prototype.forEachInExtent=function(t,e){return this.forEach_(this.getInExtent(t),e)},t.prototype.forEach_=function(t,e){for(var r,n=0,i=t.length;n<i;n++)if(r=e(t[n]))return r;return r},t.prototype.isEmpty=function(){return Object(y.d)(this.items_)},t.prototype.clear=function(){this.rbush_.clear(),this.items_={}},t.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return Object(l.k)(e.minX,e.minY,e.maxX,e.maxY,t)},t.prototype.concat=function(t){for(var e in this.rbush_.load(t.rbush_.all()),t.items_)this.items_[e]=t.items_[e]},t}();r.d(e,"VectorSourceEvent",(function(){return A}));var M,Y=(M=function(t,e){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}M(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),A=function(t){function e(e,r){var n=t.call(this,e)||this;return n.feature=r,n}return Y(e,t),e}(c.a),C=function(t){function e(e){var r=this,n=e||{};(r=t.call(this,{attributions:n.attributions,projection:void 0,state:x.a.READY,wrapX:void 0===n.wrapX||n.wrapX})||this).loader_=p.c,r.format_=n.format,r.overlaps_=null==n.overlaps||n.overlaps,r.url_=n.url,void 0!==n.loader?r.loader_=n.loader:void 0!==r.url_&&(Object(u.a)(r.format_,7),r.loader_=m(r.url_,r.format_)),r.strategy_=void 0!==n.strategy?n.strategy:v;var o,a,s=void 0===n.useSpatialIndex||n.useSpatialIndex;return r.featuresRtree_=s?new R:null,r.loadedExtentsRtree_=new R,r.nullGeometryFeatures_={},r.idIndex_={},r.uidIndex_={},r.featureChangeKeys_={},r.featuresCollection_=null,Array.isArray(n.features)?a=n.features:n.features&&(a=(o=n.features).getArray()),s||void 0!==o||(o=new i.a(a)),void 0!==a&&r.addFeaturesInternal(a),void 0!==o&&r.bindFeaturesCollection_(o),r}return Y(e,t),e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=Object(n.c)(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var r=t.getGeometry();if(r){var i=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(i,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new A(E,t))}else this.featuresCollection_&&this.featuresCollection_.remove(t)},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[Object(h.a)(e,f.a.CHANGE,this.handleFeatureChange_,this),Object(h.a)(e,a.a.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var r=!0,n=e.getId();return void 0!==n&&(n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=e),r&&(Object(u.a)(!(t in this.uidIndex_),30),this.uidIndex_[t]=e),r},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],r=[],i=[],o=0,a=t.length;o<a;o++){var s=t[o],u=Object(n.c)(s);this.addToIndex_(u,s)&&r.push(s)}o=0;for(var h=r.length;o<h;o++){s=r[o],u=Object(n.c)(s);this.setupChangeEvents_(u,s);var c=s.getGeometry();if(c){var f=c.getExtent();e.push(f),i.push(s)}else this.nullGeometryFeatures_[u]=s}this.featuresRtree_&&this.featuresRtree_.load(e,i);o=0;for(var l=r.length;o<l;o++)this.dispatchEvent(new A(E,r[o]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;this.addEventListener(E,(function(r){e||(e=!0,t.push(r.feature),e=!1)})),this.addEventListener(X,(function(r){e||(e=!0,t.remove(r.feature),e=!1)})),t.addEventListener(o.a.ADD,function(t){e||(e=!0,this.addFeature(t.element),e=!1)}.bind(this)),t.addEventListener(o.a.REMOVE,function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}.bind(this)),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_){this.featureChangeKeys_[e].forEach(h.c)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_)for(var r in this.featuresRtree_.forEach(this.removeFeatureInternal.bind(this)),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[r]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};var n=new A(F);this.dispatchEvent(n),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var r=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(r,(function(r){return r.getGeometry().intersectsCoordinate(t)?e(r):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(r){if(r.getGeometry().intersectsExtent(t)){var n=e(r);if(n)return n}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),Object(y.d)(this.nullGeometryFeatures_)||Object(s.c)(t,Object(y.c)(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_?this.featuresRtree_.getInExtent(t):this.featuresCollection_?this.featuresCollection_.getArray():[]},e.prototype.getClosestFeatureToCoordinate=function(t,e){var r=t[0],n=t[1],i=null,o=[NaN,NaN],a=1/0,s=[-1/0,-1/0,1/0,1/0],u=e||p.b;return this.featuresRtree_.forEachInExtent(s,(function(t){if(u(t)){var e=t.getGeometry(),h=a;if((a=e.closestPointXY(r,n,o,a))<h){i=t;var c=Math.sqrt(a);s[0]=r-c,s[1]=n-c,s[2]=r+c,s[3]=n+c}}})),i},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFeatureByUid=function(t){var e=this.uidIndex_[t];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,r=Object(n.c)(e),i=e.getGeometry();if(i){var o=i.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}else r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[r]=e);var a=e.getId();if(void 0!==a){var s=a.toString();this.idIndex_[s]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[s]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[r]=e;this.changed(),this.dispatchEvent(new A(b,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:Object(n.c)(t)in this.uidIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&Object(y.d)(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,r){var n=this.loadedExtentsRtree_,i=this.strategy_(t,e);this.loading=!1;for(var o=function(t,o){var s=i[t];n.forEachInExtent(s,(function(t){return Object(l.g)(t.extent,s)}))||(a.loader_.call(a,s,e,r),n.insert(s,{extent:s.slice()}),a.loading=a.loader_!==p.c)},a=this,s=0,u=i.length;s<u;++s)o(s)},e.prototype.refresh=function(){this.clear(!0),this.loadedExtentsRtree_.clear(),t.prototype.refresh.call(this)},e.prototype.removeLoadedExtent=function(t){var e,r=this.loadedExtentsRtree_;r.forEachInExtent(t,(function(r){if(Object(l.p)(r.extent,t))return e=r,!0})),e&&r.remove(e)},e.prototype.removeFeature=function(t){var e=Object(n.c)(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=Object(n.c)(t);this.featureChangeKeys_[e].forEach(h.c),delete this.featureChangeKeys_[e];var r=t.getId();void 0!==r&&delete this.idIndex_[r.toString()],delete this.uidIndex_[e],this.dispatchEvent(new A(X,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var r in this.idIndex_)if(this.idIndex_[r]===t){delete this.idIndex_[r],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e.prototype.setUrl=function(t){Object(u.a)(this.format_,7),this.setLoader(m(t,this.format_))},e}(g.a);e.default=C}}]);