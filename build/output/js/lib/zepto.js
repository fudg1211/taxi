var Zepto=function(){function g(b){return b==null?String(b):K[R.call(b)]||"object"}function h(b){return g(b)=="function"}function r(b){return b!=null&&b==b.window}function o(b){return b!=null&&b.nodeType==b.DOCUMENT_NODE}function w(b){return g(b)=="object"}function t(b){return w(b)&&!r(b)&&Object.getPrototypeOf(b)==Object.prototype}function u(b){return typeof b.length=="number"}function z(b){return e.call(b,function(b){return b!=null})}function x(b){return b.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,
"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function A(b){return b in L?L[b]:L[b]=RegExp("(^|\\s)"+b+"(\\s|$)")}function B(b){return"children"in b?c.call(b.children):f.map(b.childNodes,function(b){if(b.nodeType==1)return b})}function C(b,a,m){for(j in a)m&&(t(a[j])||F(a[j]))?(t(a[j])&&!t(b[j])&&(b[j]={}),F(a[j])&&!F(b[j])&&(b[j]=[]),C(b[j],a[j],m)):a[j]!==k&&(b[j]=a[j])}function s(b,a){return a==null?f(b):f(b).filter(a)}function p(b,a,m,c){return h(a)?a.call(b,m,
c):a}function v(b,a,m){m==null?b.removeAttribute(a):b.setAttribute(a,m)}function n(b,a){var m=b.className,c=m&&m.baseVal!==k;if(a===k)return c?m.baseVal:m;c?m.baseVal=a:b.className=a}function D(b){var a;try{return b?b=="true"||(b=="false"?!1:b=="null"?null:!/^0/.test(b)&&!isNaN(a=Number(b))?a:/^[\[\{]/.test(b)?f.parseJSON(b):b):b}catch(c){return b}}function E(b,a){a(b);for(var c=0,e=b.childNodes.length;c<e;c++)E(b.childNodes[c],a)}var k,j,f,d,a=[],c=a.slice,e=a.filter,q=window.document,H={},L={},
i={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},y=/^\s*<(\w+|!)[^>]*>/,S=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,G=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,N=/^(?:body|html)$/i,T=/([A-Z])/g,U="val,css,html,text,data,width,height,offset".split(","),M=q.createElement("table"),O=q.createElement("tr"),P={tr:q.createElement("tbody"),tbody:M,thead:M,tfoot:M,td:O,th:O,"*":q.createElement("div")},V=/complete|loaded|interactive/,W=/^[\w-]*$/,
K={},R=K.toString,l={},I,J,Q=q.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},F=Array.isArray||function(b){return b instanceof Array};l.matches=function(b,a){if(!a||!b||b.nodeType!==1)return!1;var c=b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector||
b.matchesSelector;if(c)return c.call(b,a);var e;e=b.parentNode;(c=!e)&&(e=Q).appendChild(b);e=~l.qsa(e,a).indexOf(b);c&&Q.removeChild(b);return e};I=function(b){return b.replace(/-+(.)?/g,function(b,a){return a?a.toUpperCase():""})};J=function(b){return e.call(b,function(a,c){return b.indexOf(a)==c})};l.fragment=function(b,a,m){var e,d,g;S.test(b)&&(e=f(q.createElement(RegExp.$1)));if(!e)b.replace&&(b=b.replace(G,"<$1></$2>")),a===k&&(a=y.test(b)&&RegExp.$1),a in P||(a="*"),g=P[a],g.innerHTML=""+
b,e=f.each(c.call(g.childNodes),function(){g.removeChild(this)});t(m)&&(d=f(e),f.each(m,function(b,a){if(U.indexOf(b)>-1)d[b](a);else d.attr(b,a)}));return e};l.Z=function(b,a){b=b||[];b.__proto__=f.fn;b.selector=a||"";return b};l.isZ=function(b){return b instanceof l.Z};l.init=function(b,a){var c;if(b)if(typeof b=="string")if(b=b.trim(),b[0]=="<"&&y.test(b))c=l.fragment(b,RegExp.$1,a),b=null;else if(a!==k)return f(a).find(b);else c=l.qsa(q,b);else if(h(b))return f(q).ready(b);else if(l.isZ(b))return b;
else if(F(b))c=z(b);else if(w(b))c=[b],b=null;else if(y.test(b))c=l.fragment(b.trim(),RegExp.$1,a),b=null;else if(a!==k)return f(a).find(b);else c=l.qsa(q,b);else return l.Z();return l.Z(c,b)};f=function(b,a){return l.init(b,a)};f.extend=function(b){var a,m=c.call(arguments,1);typeof b=="boolean"&&(a=b,b=m.shift());m.forEach(function(c){C(b,c,a)});return b};l.qsa=function(b,a){var m,e=a[0]=="#",g=!e&&a[0]==".",d=e||g?a.slice(1):a,f=W.test(d);return o(b)&&f&&e?(m=b.getElementById(d))?[m]:[]:b.nodeType!==
1&&b.nodeType!==9?[]:c.call(f&&!e?g?b.getElementsByClassName(d):b.getElementsByTagName(a):b.querySelectorAll(a))};f.contains=q.documentElement.contains?function(b,a){return b!==a&&b.contains(a)}:function(b,a){for(;a&&(a=a.parentNode);)if(a===b)return!0;return!1};f.type=g;f.isFunction=h;f.isWindow=r;f.isArray=F;f.isPlainObject=t;f.isEmptyObject=function(b){for(var a in b)return!1;return!0};f.inArray=function(b,c,m){return a.indexOf.call(c,b,m)};f.camelCase=I;f.trim=function(b){return b==null?"":String.prototype.trim.call(b)};
f.uuid=0;f.support={};f.expr={};f.map=function(b,a){var c,e=[],d;if(u(b))for(d=0;d<b.length;d++)c=a(b[d],d),c!=null&&e.push(c);else for(d in b)c=a(b[d],d),c!=null&&e.push(c);return e.length>0?f.fn.concat.apply([],e):e};f.each=function(b,a){var c;if(u(b))for(c=0;c<b.length;c++){if(a.call(b[c],c,b[c])===!1)break}else for(c in b)if(a.call(b[c],c,b[c])===!1)break;return b};f.grep=function(b,a){return e.call(b,a)};if(window.JSON)f.parseJSON=JSON.parse;f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
function(b,a){K["[object "+a+"]"]=a.toLowerCase()});f.fn={forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,indexOf:a.indexOf,concat:a.concat,map:function(b){return f(f.map(this,function(a,c){return b.call(a,c,a)}))},slice:function(){return f(c.apply(this,arguments))},ready:function(b){V.test(q.readyState)&&q.body?b(f):q.addEventListener("DOMContentLoaded",function(){b(f)},!1);return this},get:function(b){return b===k?c.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},
size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(b){a.every.call(this,function(a,c){return b.call(a,c,a)!==!1});return this},filter:function(b){return h(b)?this.not(this.not(b)):f(e.call(this,function(a){return l.matches(a,b)}))},add:function(b,a){return f(J(this.concat(f(b,a))))},is:function(b){return this.length>0&&l.matches(this[0],b)},not:function(b){var a=[];if(h(b)&&b.call!==k)this.each(function(c){b.call(this,
c)||a.push(this)});else{var e=typeof b=="string"?this.filter(b):u(b)&&h(b.item)?c.call(b):f(b);this.forEach(function(b){e.indexOf(b)<0&&a.push(b)})}return f(a)},has:function(b){return this.filter(function(){return w(b)?f.contains(this,b):f(this).find(b).size()})},eq:function(b){return b===-1?this.slice(b):this.slice(b,+b+1)},first:function(){var b=this[0];return b&&!w(b)?b:f(b)},last:function(){var b=this[this.length-1];return b&&!w(b)?b:f(b)},find:function(b){var c=this;return b?typeof b=="object"?
f(b).filter(function(){var b=this;return a.some.call(c,function(a){return f.contains(a,b)})}):this.length==1?f(l.qsa(this[0],b)):this.map(function(){return l.qsa(this,b)}):[]},closest:function(b,a){var c=this[0],e=!1;for(typeof b=="object"&&(e=f(b));c&&!(e?e.indexOf(c)>=0:l.matches(c,b));)c=c!==a&&!o(c)&&c.parentNode;return f(c)},parents:function(b){for(var a=[],c=this;c.length>0;)c=f.map(c,function(b){if((b=b.parentNode)&&!o(b)&&a.indexOf(b)<0)return a.push(b),b});return s(a,b)},parent:function(b){return s(J(this.pluck("parentNode")),
b)},children:function(b){return s(this.map(function(){return B(this)}),b)},contents:function(){return this.map(function(){return c.call(this.childNodes)})},siblings:function(b){return s(this.map(function(b,a){return e.call(B(a.parentNode),function(b){return b!==a})}),b)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(b){return f.map(this,function(a){return a[b]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,
"").getPropertyValue("display")=="none"){var b=this.style,a=this.nodeName,c,e;H[a]||(c=q.createElement(a),q.body.appendChild(c),e=getComputedStyle(c,"").getPropertyValue("display"),c.parentNode.removeChild(c),e=="none"&&(e="block"),H[a]=e);b.display=H[a]}})},replaceWith:function(b){return this.before(b).remove()},wrap:function(b){var a=h(b);if(this[0]&&!a)var c=f(b).get(0),e=c.parentNode||this.length>1;return this.each(function(d){f(this).wrapAll(a?b.call(this,d):e?c.cloneNode(!0):c)})},wrapAll:function(b){if(this[0]){f(this[0]).before(b=
f(b));for(var a;(a=b.children()).length;)b=a.first();f(b).append(this)}return this},wrapInner:function(b){var a=h(b);return this.each(function(c){var e=f(this),d=e.contents(),c=a?b.call(this,c):b;d.length?d.wrapAll(c):e.append(c)})},unwrap:function(){this.parent().each(function(){f(this).replaceWith(f(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var a=
f(this);(b===k?a.css("display")=="none":b)?a.show():a.hide()})},prev:function(b){return f(this.pluck("previousElementSibling")).filter(b||"*")},next:function(b){return f(this.pluck("nextElementSibling")).filter(b||"*")},html:function(b){return 0 in arguments?this.each(function(a){var c=this.innerHTML;f(this).empty().append(p(this,b,a,c))}):0 in this?this[0].innerHTML:null},text:function(b){return 0 in arguments?this.each(function(a){a=p(this,b,a,this.textContent);this.textContent=a==null?"":""+a}):
0 in this?this[0].textContent:null},attr:function(b,a){var c;return typeof b=="string"&&!(1 in arguments)?!this.length||this[0].nodeType!==1?k:!(c=this[0].getAttribute(b))&&b in this[0]?this[0][b]:c:this.each(function(c){if(this.nodeType===1)if(w(b))for(j in b)v(this,j,b[j]);else v(this,b,p(this,a,c,this.getAttribute(b)))})},removeAttr:function(b){return this.each(function(){this.nodeType===1&&v(this,b)})},prop:function(b,a){b=X[b]||b;return 1 in arguments?this.each(function(c){this[b]=p(this,a,c,
this[b])}):this[0]&&this[0][b]},data:function(b,a){var c="data-"+b.replace(T,"-$1").toLowerCase(),c=1 in arguments?this.attr(c,a):this.attr(c);return c!==null?D(c):k},val:function(b){return 0 in arguments?this.each(function(a){this.value=p(this,b,a,this.value)}):this[0]&&(this[0].multiple?f(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(b){if(b)return this.each(function(a){var c=f(this),a=p(this,b,a,c.offset()),e=c.offsetParent().offset(),
a={top:a.top-e.top,left:a.left-e.left};c.css("position")=="static"&&(a.position="relative");c.css(a)});if(!this.length)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:Math.round(a.width),height:Math.round(a.height)}},css:function(b,a){if(arguments.length<2){var c=this[0],e=getComputedStyle(c,"");if(!c)return;if(typeof b=="string")return c.style[I(b)]||e.getPropertyValue(b);else if(F(b)){var d={};f.each(F(b)?b:[b],function(b,
a){d[a]=c.style[I(a)]||e.getPropertyValue(a)});return d}}var q="";if(g(b)=="string")!a&&a!==0?this.each(function(){this.style.removeProperty(x(b))}):q=x(b)+":"+(typeof a=="number"&&!i[x(b)]?a+"px":a);else for(j in b)!b[j]&&b[j]!==0?this.each(function(){this.style.removeProperty(x(j))}):q+=x(j)+":"+(typeof b[j]=="number"&&!i[x(j)]?b[j]+"px":b[j])+";";return this.each(function(){this.style.cssText+=";"+q})},index:function(b){return b?this.indexOf(f(b)[0]):this.parent().children().indexOf(this[0])},
hasClass:function(b){return!b?!1:a.some.call(this,function(b){return this.test(n(b))},A(b))},addClass:function(b){return!b?this:this.each(function(a){d=[];var c=n(this);p(this,b,a,c).split(/\s+/g).forEach(function(b){f(this).hasClass(b)||d.push(b)},this);d.length&&n(this,c+(c?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(a){if(b===k)return n(this,"");d=n(this);p(this,b,a,d).split(/\s+/g).forEach(function(b){d=d.replace(A(b)," ")});n(this,d.trim())})},toggleClass:function(b,
a){return!b?this:this.each(function(c){var e=f(this);p(this,b,c,n(this)).split(/\s+/g).forEach(function(b){(a===k?!e.hasClass(b):a)?e.addClass(b):e.removeClass(b)})})},scrollTop:function(b){if(this.length){var a="scrollTop"in this[0];return b===k?a?this[0].scrollTop:this[0].pageYOffset:this.each(a?function(){this.scrollTop=b}:function(){this.scrollTo(this.scrollX,b)})}},scrollLeft:function(b){if(this.length){var a="scrollLeft"in this[0];return b===k?a?this[0].scrollLeft:this[0].pageXOffset:this.each(a?
function(){this.scrollLeft=b}:function(){this.scrollTo(b,this.scrollY)})}},position:function(){if(this.length){var b=this[0],a=this.offsetParent(),c=this.offset(),e=N.test(a[0].nodeName)?{top:0,left:0}:a.offset();c.top-=parseFloat(f(b).css("margin-top"))||0;c.left-=parseFloat(f(b).css("margin-left"))||0;e.top+=parseFloat(f(a[0]).css("border-top-width"))||0;e.left+=parseFloat(f(a[0]).css("border-left-width"))||0;return{top:c.top-e.top,left:c.left-e.left}}},offsetParent:function(){return this.map(function(){for(var b=
this.offsetParent||q.body;b&&!N.test(b.nodeName)&&f(b).css("position")=="static";)b=b.offsetParent;return b})}};f.fn.detach=f.fn.remove;["width","height"].forEach(function(b){var a=b.replace(/./,function(a){return a[0].toUpperCase()});f.fn[b]=function(c){var e,d=this[0];return c===k?r(d)?d["inner"+a]:o(d)?d.documentElement["scroll"+a]:(e=this.offset())&&e[b]:this.each(function(a){d=f(this);d.css(b,p(this,c,a,d[b]()))})}});["after","prepend","before","append"].forEach(function(a,c){var e=c%2;f.fn[a]=
function(){var a,b=f.map(arguments,function(b){a=g(b);return a=="object"||a=="array"||b==null?b:l.fragment(b)}),d,i=this.length>1;return b.length<1?this:this.each(function(a,g){d=e?g:g.parentNode;var g=c==0?g.nextSibling:c==1?g.firstChild:c==2?g:null,H=f.contains(q.documentElement,d);b.forEach(function(a){if(i)a=a.cloneNode(!0);else if(!d)return f(a).remove();d.insertBefore(a,g);H&&E(a,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&
window.eval.call(window,a.innerHTML)})})})};f.fn[e?a+"To":"insert"+(c?"Before":"After")]=function(c){f(c)[a](this);return this}});l.Z.prototype=f.fn;l.uniq=J;l.deserializeValue=D;f.zepto=l;return f}();window.Zepto=Zepto;window.$===void 0&&(window.$=Zepto);
(function(g){function h(a){return a._zid||(a._zid=x++)}function r(a,c,e,d){c=o(c);if(c.ns)var g=RegExp("(?:^| )"+c.ns.replace(" "," .* ?")+"(?: |$)");return(p[h(a)]||[]).filter(function(a){return a&&(!c.e||a.e==c.e)&&(!c.ns||g.test(a.ns))&&(!e||h(a.fn)===h(e))&&(!d||a.sel==d)})}function o(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function w(a,c,e,d,f,j,i){var y=h(a),k=p[y]||(p[y]=[]);c.split(/\s/).forEach(function(c){if(c=="ready")return g(document).ready(e);var h=o(c);
h.fn=e;h.sel=f;h.e in E&&(e=function(a){var c=a.relatedTarget;if(!c||c!==this&&!g.contains(this,c))return h.fn.apply(this,arguments)});var y=(h.del=j)||e;h.proxy=function(c){c=u(c);if(!c.isImmediatePropagationStopped()){c.data=d;var e=y.apply(a,c._args==A?[c]:[c].concat(c._args));e===!1&&(c.preventDefault(),c.stopPropagation());return e}};h.i=k.length;k.push(h);"addEventListener"in a&&a.addEventListener(E[h.e]||n&&D[h.e]||h.e,h.proxy,h.del&&!n&&h.e in D||!!i)})}function t(a,c,e,d,g){var f=h(a);(c||
"").split(/\s/).forEach(function(c){r(a,c,e,d).forEach(function(c){delete p[f][c.i];"removeEventListener"in a&&a.removeEventListener(E[c.e]||n&&D[c.e]||c.e,c.proxy,c.del&&!n&&c.e in D||!!g)})})}function u(a,c){if(c||!a.isDefaultPrevented)if(c||(c=a),g.each(d,function(e,d){var g=c[e];a[e]=function(){this[d]=k;return g&&g.apply(c,arguments)};a[d]=j}),c.defaultPrevented!==A?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())a.isDefaultPrevented=k;return a}
function z(a){var c,e={originalEvent:a};for(c in a)!f.test(c)&&a[c]!==A&&(e[c]=a[c]);return u(e,a)}var x=1,A,B=Array.prototype.slice,C=g.isFunction,s=function(a){return typeof a=="string"},p={},v={},n="onfocusin"in window,D={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents";g.event={add:w,remove:t};g.proxy=function(a,c){var e=2 in arguments&&B.call(arguments,2);if(C(a)){var d=function(){return a.apply(c,e?e.concat(B.call(arguments)):
arguments)};d._zid=h(a);return d}else if(s(c))return e?(e.unshift(a[c],a),g.proxy.apply(null,e)):g.proxy(a[c],a);else throw new TypeError("expected function");};g.fn.bind=function(a,c,e){return this.on(a,c,e)};g.fn.unbind=function(a,c){return this.off(a,c)};g.fn.one=function(a,c,e,d){return this.on(a,c,e,d,1)};var k=function(){return!0},j=function(){return!1},f=/^([A-Z]|returnValue$|layer[XY]$)/,d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};
g.fn.delegate=function(a,c,e){return this.on(c,a,e)};g.fn.undelegate=function(a,c,e){return this.off(c,a,e)};g.fn.live=function(a,c){g(document.body).delegate(this.selector,a,c);return this};g.fn.die=function(a,c){g(document.body).undelegate(this.selector,a,c);return this};g.fn.on=function(a,c,e,d,f){var h,i,y=this;if(a&&!s(a))return g.each(a,function(a,d){y.on(a,c,e,d,f)}),y;!s(c)&&!C(d)&&d!==!1&&(d=e,e=c,c=A);if(C(e)||e===!1)d=e,e=A;d===!1&&(d=j);return y.each(function(j,G){f&&(h=function(a){t(G,
a.type,d);return d.apply(this,arguments)});c&&(i=function(a){var e,f=g(a.target).closest(c,G).get(0);if(f&&f!==G)return e=g.extend(z(a),{currentTarget:f,liveFired:G}),(h||d).apply(f,[e].concat(B.call(arguments,1)))});w(G,a,d,e,c,i||h)})};g.fn.off=function(a,c,e){var d=this;if(a&&!s(a))return g.each(a,function(a,e){d.off(a,c,e)}),d;!s(c)&&!C(e)&&e!==!1&&(e=c,c=A);e===!1&&(e=j);return d.each(function(){t(this,a,e,c)})};g.fn.trigger=function(a,c){a=s(a)||g.isPlainObject(a)?g.Event(a):u(a);a._args=c;
return this.each(function(){"dispatchEvent"in this?this.dispatchEvent(a):g(this).triggerHandler(a,c)})};g.fn.triggerHandler=function(a,c){var e,d;this.each(function(f,h){e=z(s(a)?g.Event(a):a);e._args=c;e.target=h;g.each(r(h,a.type||a),function(a,c){d=c.proxy(e);if(e.isImmediatePropagationStopped())return!1})});return d};"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a){g.fn[a]=
function(c){return c?this.bind(a,c):this.trigger(a)}});["focus","blur"].forEach(function(a){g.fn[a]=function(c){c?this.bind(a,c):this.each(function(){try{this[a]()}catch(c){}});return this}});g.Event=function(a,c){if(!s(a))c=a,a=c.type;var e=document.createEvent(v[a]||"Events"),d=!0;if(c)for(var g in c)g=="bubbles"?d=!!c[g]:e[g]=c[g];e.initEvent(a,d,!0);return u(e)}})(Zepto);
(function(g){function h(d,a,c,e){if(d.global)return d=a||p,c=g.Event(c),g(d).trigger(c,e),!c.isDefaultPrevented()}function r(d){d.global&&g.active++===0&&h(d,null,"ajaxStart")}function o(d,a){var c=a.context;if(a.beforeSend.call(c,d,a)===!1||h(a,c,"ajaxBeforeSend",[d,a])===!1)return!1;h(a,c,"ajaxSend",[d,a])}function w(d,a,c,e){var g=c.context;c.success.call(g,d,"success",a);e&&e.resolveWith(g,[d,"success",a]);h(c,g,"ajaxSuccess",[a,c,d]);u("success",a,c)}function t(d,a,c,e,g){var f=e.context;e.error.call(f,
c,a,d);g&&g.rejectWith(f,[c,a,d]);h(e,f,"ajaxError",[c,e,d||a]);u(a,c,e)}function u(d,a,c){var e=c.context;c.complete.call(e,a,d);h(c,e,"ajaxComplete",[a,c]);c.global&&!--g.active&&h(c,null,"ajaxStop")}function z(){}function x(d,a){return a==""?d:(d+"&"+a).replace(/[&?]{1,2}/,"?")}function A(d){if(d.processData&&d.data&&g.type(d.data)!="string")d.data=g.param(d.data,d.traditional);if(d.data&&(!d.type||d.type.toUpperCase()=="GET"))d.url=x(d.url,d.data),d.data=void 0}function B(d,a,c,e){g.isFunction(a)&&
(e=c,c=a,a=void 0);g.isFunction(c)||(e=c,c=void 0);return{url:d,data:a,success:c,dataType:e}}function C(d,a,c,e){var f,h=g.isArray(a),j=g.isPlainObject(a);g.each(a,function(a,o){f=g.type(o);e&&(a=c?e:e+"["+(j||f=="object"||f=="array"?a:"")+"]");!e&&h?d.add(o.name,o.value):f=="array"||!c&&f=="object"?C(d,o,c,a):d.add(a,o)})}var s=0,p=window.document,v,n,D=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,E=/^(?:text|application)\/javascript/i,k=/^(?:text|application)\/xml/i,j=/^\s*$/;g.active=
0;g.ajaxJSONP=function(d,a){if(!("type"in d))return g.ajax(d);var c=d.jsonpCallback,e=(g.isFunction(c)?c():c)||"jsonp"+ ++s,f=p.createElement("script"),h=window[e],j,i=function(a){g(f).triggerHandler("error",a||"abort")},k={abort:i},n;a&&a.promise(k);g(f).on("load error",function(c,i){clearTimeout(n);g(f).off().remove();c.type=="error"||!j?t(null,i||"error",k,d,a):w(j[0],k,d,a);window[e]=h;j&&g.isFunction(h)&&h(j[0]);h=j=void 0});if(o(k,d)===!1)return i("abort"),k;window[e]=function(){j=arguments};
f.src=d.url.replace(/\?(.+)=\?/,"?$1="+e);p.head.appendChild(f);d.timeout>0&&(n=setTimeout(function(){i("timeout")},d.timeout));return k};g.ajaxSettings={type:"GET",beforeSend:z,success:z,error:z,complete:z,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0};
g.ajax=function(d){var a=g.extend({},d||{}),c=g.Deferred&&g.Deferred();for(v in g.ajaxSettings)a[v]===void 0&&(a[v]=g.ajaxSettings[v]);r(a);if(!a.crossDomain)a.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(a.url)&&RegExp.$2!=window.location.host;if(!a.url)a.url=window.location.toString();A(a);var e=a.dataType,f=/\?.+=\?/.test(a.url);f&&(e="jsonp");if(a.cache===!1||(!d||d.cache!==!0)&&("script"==e||"jsonp"==e))a.url=x(a.url,"_="+Date.now());if("jsonp"==e){if(!f)a.url=x(a.url,a.jsonp?a.jsonp+"=?":a.jsonp===
!1?"":"callback=?");return g.ajaxJSONP(a,c)}var d=a.accepts[e],h={},f=function(a,c){h[a.toLowerCase()]=[a,c]},p=/^([\w-]+:)\/\//.test(a.url)?RegExp.$1:window.location.protocol,i=a.xhr(),s=i.setRequestHeader,u;c&&c.promise(i);a.crossDomain||f("X-Requested-With","XMLHttpRequest");f("Accept",d||"*/*");if(d=a.mimeType||d)d.indexOf(",")>-1&&(d=d.split(",",2)[0]),i.overrideMimeType&&i.overrideMimeType(d);if(a.contentType||a.contentType!==!1&&a.data&&a.type.toUpperCase()!="GET")f("Content-Type",a.contentType||
"application/x-www-form-urlencoded");if(a.headers)for(n in a.headers)f(n,a.headers[n]);i.setRequestHeader=f;i.onreadystatechange=function(){if(i.readyState==4){i.onreadystatechange=z;clearTimeout(u);var d,f=!1;if(i.status>=200&&i.status<300||i.status==304||i.status==0&&p=="file:"){if(!(d=e))(d=a.mimeType||i.getResponseHeader("content-type"))&&(d=d.split(";",2)[0]),d=d&&(d=="text/html"?"html":d=="application/json"?"json":E.test(d)?"script":k.test(d)&&"xml")||"text";e=d;d=i.responseText;try{e=="script"?
(0,eval)(d):e=="xml"?d=i.responseXML:e=="json"&&(d=j.test(d)?null:g.parseJSON(d))}catch(h){f=h}f?t(f,"parsererror",i,a,c):w(d,i,a,c)}else t(i.statusText||null,i.status?"error":"abort",i,a,c)}};if(o(i,a)===!1)return i.abort(),t(null,"abort",i,a,c),i;if(a.xhrFields)for(n in a.xhrFields)i[n]=a.xhrFields[n];i.open(a.type,a.url,"async"in a?a.async:!0,a.username,a.password);for(n in h)s.apply(i,h[n]);a.timeout>0&&(u=setTimeout(function(){i.onreadystatechange=z;i.abort();t(null,"timeout",i,a,c)},a.timeout));
i.send(a.data?a.data:null);return i};g.get=function(){return g.ajax(B.apply(null,arguments))};g.post=function(){var d=B.apply(null,arguments);d.type="POST";return g.ajax(d)};g.getJSON=function(){var d=B.apply(null,arguments);d.dataType="json";return g.ajax(d)};g.fn.load=function(d,a,c){if(!this.length)return this;var e=this,f=d.split(/\s/),h,d=B(d,a,c),j=d.success;if(f.length>1)d.url=f[0],h=f[1];d.success=function(a){e.html(h?g("<div>").html(a.replace(D,"")).find(h):a);j&&j.apply(e,arguments)};g.ajax(d);
return this};var f=encodeURIComponent;g.param=function(d,a){var c=[];c.add=function(a,c){this.push(f(a)+"="+f(c))};C(c,d,a);return c.join("&").replace(/%20/g,"+")}})(Zepto);
(function(g){g.fn.serializeArray=function(){var h=[],r;g([].slice.call(this.get(0).elements)).each(function(){r=g(this);var o=r.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&o!="submit"&&o!="reset"&&o!="button"&&(o!="radio"&&o!="checkbox"||this.checked)&&h.push({name:r.attr("name"),value:r.val()})});return h};g.fn.serialize=function(){var g=[];this.serializeArray().forEach(function(r){g.push(encodeURIComponent(r.name)+"="+encodeURIComponent(r.value))});return g.join("&")};
g.fn.submit=function(h){h?this.bind("submit",h):this.length&&(h=g.Event("submit"),this.eq(0).trigger(h),h.isDefaultPrevented()||this.get(0).submit());return this}})(Zepto);(function(g){"__proto__"in{}||g.extend(g.zepto,{Z:function(h,r){h=h||[];g.extend(h,g.fn);h.selector=r||"";h.__Z=!0;return h},isZ:function(h){return g.type(h)==="array"&&"__Z"in h}});try{getComputedStyle(void 0)}catch(h){var r=getComputedStyle;window.getComputedStyle=function(g){try{return r(g)}catch(h){return null}}}})(Zepto);