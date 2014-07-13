var requirejs,require,define;
(function(aa){function F(b){return"[object Function]"===M.call(b)}function G(b){return"[object Array]"===M.call(b)}function u(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function S(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ea.call(b,c)}function l(b,c){return s(b,c)&&b[c]}function A(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function T(b,c,d,e){c&&A(c,function(c,f){if(d||!s(b,f))e&&"object"===typeof c&&c&&!G(c)&&!F(c)&&!(c instanceof
RegExp)?(b[f]||(b[f]={}),T(b[f],c,d,e)):b[f]=c});return b}function t(b,c){return function(){return c.apply(b,arguments)}}function ba(b){throw b;}function ca(b){if(!b)return b;var c=aa;u(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function fa(b){function c(a,m,b){var g,j,c,d,e,f,i,o,m=m&&m.split("/"),h=k.map,n=h&&h["*"];if(a){a=a.split("/");j=a.length-1;k.nodeIdCompat&&
O.test(a[j])&&(a[j]=a[j].replace(O,""));"."===a[0].charAt(0)&&m&&(j=m.slice(0,m.length-1),a=j.concat(a));j=a;for(c=0;c<j.length;c++)if(d=j[c],"."===d)j.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===j[2]||".."===j[c-1])&&0<c)j.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(m||n)){j=a.split("/");c=j.length;a:for(;0<c;c-=1){e=j.slice(0,c).join("/");if(m)for(d=m.length;0<d;d-=1)if(b=l(h,m.slice(0,d).join("/")))if(b=l(b,e)){g=b;f=c;break a}!i&&n&&l(n,e)&&(i=l(n,e),o=c)}!g&&i&&(g=i,f=o);g&&(j.splice(0,
f,g),a=j.join("/"))}return(g=l(k.pkgs,a))?g:a}function d(a){y&&u(document.getElementsByTagName("script"),function(m){if(m.getAttribute("data-requiremodule")===a&&m.getAttribute("data-requirecontext")===i.contextName)return m.parentNode.removeChild(m),!0})}function e(a){var m=l(k.paths,a);if(m&&G(m)&&1<m.length)return m.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var m,b=a?a.indexOf("!"):-1;-1<b&&(m=a.substring(0,b),a=a.substring(b+1,a.length));return[m,a]}function o(a,
m,b,g){var j,d,e=null,f=m?m.name:null,k=a,o=!0,h="";a||(o=!1,a="_@r"+(M+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,f,g),d=l(q,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,f,g)}):-1===a.indexOf("!")?c(a,f,g):a:(h=c(a,f,g),a=n(h),e=a[0],h=a[1],b=!0,j=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(R+=1):"";return{prefix:e,name:h,parentMap:m,unnormalized:!!b,url:j,originalName:k,isDefine:o,id:(e?e+"!"+h:h)+b}}function r(a){var m=a.id,b=l(h,m);b||(b=h[m]=new i.Module(a));return b}function p(a,
b,c){var g=a.id,j=l(h,g);if(s(q,g)&&(!j||j.defineEmitComplete))"defined"===b&&c(q[g]);else if(j=r(a),j.error&&"error"===b)c(j.error);else j.on(b,c)}function v(a,b){var c=a.requireModules,g=!1;if(b)b(a);else if(u(c,function(b){if(b=l(h,b))b.error=a,b.events.error&&(g=!0,b.emit("error",a))}),!g)f.onError(a)}function w(){P.length&&(ga.apply(z,[z.length,0].concat(P)),P=[])}function x(a){delete h[a];delete U[a]}function E(a,b,c){var g=a.map.id;a.error?a.emit("error",a.error):(b[g]=!0,u(a.depMaps,function(g,
d){var e=g.id,f=l(h,e);f&&!a.depMatched[d]&&!c[e]&&(l(b,e)?(a.defineDep(d,q[e]),a.check()):E(f,b,c))}),c[g]=!0)}function C(){var a,b,c=(a=1E3*k.waitSeconds)&&i.startTime+a<(new Date).getTime(),g=[],j=[],f=!1,h=!0;if(!V){V=!0;A(U,function(a){var i=a.map,k=i.id;if(a.enabled&&(i.isDefine||j.push(a),!a.error))if(!a.inited&&c)e(k)?f=b=!0:(g.push(k),d(k));else if(!a.inited&&a.fetched&&i.isDefine&&(f=!0,!i.prefix))return h=!1});if(c&&g.length)return a=B("timeout","Load timeout for modules: "+g,null,g),a.contextName=
i.contextName,v(a);h&&u(j,function(a){E(a,{},{})});if((!c||b)&&f)if((y||da)&&!W)W=setTimeout(function(){W=0;C()},50);V=!1}}function D(a){s(q,a[0])||r(o(a[0],null,!0)).init(a[1],a[2])}function H(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!X?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||X)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function I(){var a;for(w();z.length;){a=
z.shift();if(null===a[0])return v(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));D(a)}}var V,Y,i,J,W,k={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},U={},Z={},z=[],q={},Q={},$={},M=1,R=1;J={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?q[a.map.id]=a.exports:a.exports=q[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,
uri:a.map.url,config:function(){return l(k.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Y=function(a){this.events=l(Z,a.id)||{};this.map=a;this.shim=l(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Y.prototype={init:function(a,b,c,g){g=g||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=t(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=
g.ignore;g.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],t(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;
Q[a]||(Q[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var g=this.exports,j=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(F(j)){if(this.events.error&&this.map.isDefine||f.onError!==ba)try{g=i.execCb(c,j,b,g)}catch(d){a=d}else g=i.execCb(c,j,b,g);this.map.isDefine&&void 0===g&&((b=this.module)?g=b.exports:this.usingExports&&
(g=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",v(this.error=a)}else g=j;this.exports=g;if(this.map.isDefine&&!this.ignore&&(q[c]=g,f.onResourceLoad))f.onResourceLoad(i,this.map,this.depMaps);x(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=o(a.prefix);this.depMaps.push(d);p(d,"defined",t(this,function(g){var j,d;d=l($,this.map.id);var e=this.map.name,N=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(g.normalize&&(e=g.normalize(e,function(a){return c(a,N,!0)})||""),g=o(a.prefix+"!"+e,this.map.parentMap),p(g,"defined",t(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=l(h,g.id)){this.depMaps.push(g);
if(this.events.error)d.on("error",t(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(j=t(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),j.error=t(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];A(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&x(a.map.id)});v(a)}),j.fromText=t(this,function(g,c){var d=a.name,e=o(d),N=K;c&&(g=c);N&&(K=!1);r(e);s(k.config,b)&&(k.config[d]=k.config[b]);try{f.exec(g)}catch(h){return v(B("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}N&&(K=!0);this.depMaps.push(e);i.completeLoad(d);n([d],j)}),g.load(a.name,n,j,k))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){U[this.map.id]=this;this.enabling=this.enabled=!0;u(this.depMaps,t(this,function(a,b){var c,g;if("string"===typeof a){a=o(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=l(J,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;p(a,"defined",t(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&p(a,"error",t(this,this.errback))}c=a.id;g=h[c];!s(J,c)&&g&&!g.enabled&&i.enable(a,this)}));A(this.pluginMaps,t(this,function(a){var b=l(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){u(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:k,contextName:b,registry:h,defined:q,urlFetched:Q,defQueue:z,Module:Y,makeModuleMap:o,
nextTick:f.nextTick,onError:v,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.shim,c={paths:!0,bundles:!0,config:!0,map:!0};A(a,function(a,b){c[b]?(k[b]||(k[b]={}),T(k[b],a,!0,!0)):k[b]=a});a.bundles&&A(a.bundles,function(a,b){u(a,function(a){a!==b&&($[a]=b)})});a.shim&&(A(a.shim,function(a,c){G(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),k.shim=b);a.packages&&u(a.packages,function(a){var b,a=
"string"===typeof a?{name:a}:a;b=a.name;a.location&&(k.paths[b]=a.location);k.pkgs[b]=a.name+"/"+(a.main||"main").replace(ha,"").replace(O,"")});A(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=o(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(aa,arguments));return b||a.exports&&ca(a.exports)}},makeRequire:function(a,e){function k(c,d,l){var n,p;e.enableBuildCallback&&d&&F(d)&&(d.__requireJsBuild=!0);
if("string"===typeof c){if(F(d))return v(B("requireargs","Invalid require call"),l);if(a&&s(J,c))return J[c](h[a.id]);if(f.get)return f.get(i,c,a,k);n=o(c,a,!1,!0);n=n.id;return!s(q,n)?v(B("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):q[n]}I();i.nextTick(function(){I();p=r(o(null,a));p.skipMap=e.skipMap;p.init(c,d,l,{enabled:!0});C()});return k}e=e||{};T(k,{isBrowser:y,toUrl:function(b){var d,e=b.lastIndexOf("."),f=b.split("/")[0];if(-1!==e&&
(!("."===f||".."===f)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return s(q,o(b,a,!1,!0).id)},specified:function(b){b=o(b,a,!1,!0).id;return s(q,b)||s(h,b)}});a||(k.undef=function(b){w();var c=o(b,a,!0),e=l(h,b);d(b);delete q[b];delete Q[c.url];delete Z[b];S(z,function(a,c){a[0]===b&&z.splice(c,1)});e&&(e.events.defined&&(Z[b]=e.events),x(b))});return k},enable:function(a){l(h,a.id)&&r(a).enable()},completeLoad:function(a){var b,
c,d=l(k.shim,a)||{},f=d.exports;for(w();z.length;){c=z.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);D(c)}c=l(h,a);if(!b&&!s(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!f||!ca(f)))return e(a)?void 0:v(B("nodefine","No define call for "+a,null,[a]));D([a,d.deps||[],d.exportsFn])}C()},nameToUrl:function(a,b,c){var d,e,h;(d=l(k.pkgs,a))&&(a=d);if(d=l($,a))return i.nameToUrl(d,b,c);if(f.jsExtRegExp.test(a))d=a+(b||"");else{d=k.paths;a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,
e).join("/"),h=l(d,h)){G(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+d}return k.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+k.urlArgs):d},load:function(a,b){f.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ia.test((a.currentTarget||a.srcElement).readyState))L=null,a=H(a),i.completeLoad(a.id)},onScriptError:function(a){var b=H(a);if(!e(b.id))return v(B("scripterror",
"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var f,w,x,C,H,D,L,I,r,R,ja=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,O=/\.js$/,ha=/^\.\//;w=Object.prototype;var M=w.toString,ea=w.hasOwnProperty,ga=Array.prototype.splice,y=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),da=!y&&"undefined"!==typeof importScripts,ia=y&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
X="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),E={},p={},P=[],K=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(F(requirejs))return;p=requirejs;requirejs=void 0}"undefined"!==typeof require&&!F(require)&&(p=require,require=void 0);f=requirejs=function(b,c,d,e){var n,o="_";!G(b)&&"string"!==typeof b&&(n=b,G(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(o=n.context);(e=l(E,o))||(e=E[o]=f.s.newContext(o));n&&e.configure(n);return e.require(b,c,d)};f.config=function(b){return f(b)};
f.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=f);f.version="2.1.14";f.jsExtRegExp=/^\/|:|\?|\.js$/;f.isBrowser=y;w=f.s={contexts:E,newContext:fa};f({});u(["toUrl","undef","defined","specified"],function(b){f[b]=function(){var c=E._;return c.require[b].apply(c,arguments)}});if(y&&(x=w.head=document.getElementsByTagName("head")[0],C=document.getElementsByTagName("base")[0]))x=w.head=C.parentNode;f.onError=ba;f.createNode=function(b){var c=
b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};f.load=function(b,c,d){var e=b&&b.config||{};if(y)return e=f.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&!X?(K=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):
(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,I=e,C?x.insertBefore(e,C):x.appendChild(e),I=null,e;if(da)try{importScripts(d),b.completeLoad(c)}catch(l){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,l,[c]))}};y&&!p.skipDataMain&&S(document.getElementsByTagName("script"),function(b){x||(x=b.parentNode);if(H=b.getAttribute("data-main"))return r=H,p.baseUrl||(D=r.split("/"),r=D.pop(),R=D.length?D.join("/")+"/":"./",p.baseUrl=
R),r=r.replace(O,""),f.jsExtRegExp.test(r)&&(r=H),p.deps=p.deps?p.deps.concat(r):[r],!0});define=function(b,c,d){var e,f;"string"!==typeof b&&(d=c,c=b,b=null);G(c)||(d=c,c=null);!c&&F(d)&&(c=[],d.length&&(d.toString().replace(ja,"").replace(ka,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(K){if(!(e=I))L&&"interactive"===L.readyState||S(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return L=b}),e=L;e&&(b||
(b=e.getAttribute("data-requiremodule")),f=E[e.getAttribute("data-requirecontext")])}(f?f.defQueue:P).push([b,c,d])};define.amd={jQuery:!0};f.exec=function(b){return eval(b)};f(p)}})(this);