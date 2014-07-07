(function(){var e=window,t={};t.Version="0.1.0",t.$=e.jQuery||e.Zepto||e.$;var n=function(e){return{}.toString.call(e)=="[object Function]"},r=function(e){return{}.toString.call(e)=="[object String]"},i=function(e){return{}.toString.call(e)=="[object Array]"},s=function(e){return{}.toString.call(e)=="[object Object]"},o=function(e){var t={},n=this;n.isArray(e)&&(t=[]);var r=function(e,t){if(n.isObject(e))for(k in e)e.hasOwnProperty(k)&&(n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]);else if(n.isArray(e))for(k in e)n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]}(e,t);return t},u=[].slice,a=t.events={on:function(e,t,n){this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n||this}),this},once:function(e,t,n){var r=this,i=function(){r.off(e),t.apply(this,arguments)};this.on(e,i,n)},off:function(e){var t,n,i,s,o;if(!e)return this;r(e)?t=[e]:t=e;for(n=0,i=t.length;n<i;n++)e=t[n],delete this._events[e]},trigger:function(e){if(!this._events)return this;var t=u.call(arguments,1),n=this._events[e],r=this._events.all;return n&&f(n,t),r&&f(r,arguments),this}},f=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.context);return;case 1:while(++r<i)(n=e[r]).callback.call(n.context,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.context,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.context,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.context,t)}},l=t.Module=function(e,t){this.attributes={},this.set(e,t)};l.prototype={get:function(e){return this.attributes[e]},del:function(e){delete this.attributes[e],this.trigger("del:"+e,this)},set:function(e,t){var n,r,i,s,o=[],u=[],a;t||(t={}),r=t.silent,i=t.del,o=this.attributes;for(n in e)a=e[n],u.push(n),i?this.del(n):o[n]=a;if(!r)for(var f=0;f<u.length;f++)this.trigger("change:"+u[f],this,o[u[f]],t);return this}};var c=t.View=function(e){this.initializer.apply(this,arguments),this.init.apply(this,arguments),this.fn=this.constructor.prototype};c.prototype={proxy:function(e){return $.proxy(e,this)},include:function(e){$.extend(this.fn,e)},init:function(){},initializer:function(e){for(var t in e)this[t]=e[t];this.elements&&this.refreshElements(),this.events&&this.delegateEvents()},$:function(e){return this.el||(this.el=$(document.body)),this.el.find(e)},eventSplitter:/^(\w+)\s*(.*)$/,delegateEvents:function(){for(var e in this.events){var t=this.events[e],n=this.proxy(this[t]),r=function(e){return function(t){e||console.log("未找到方法"),e($(this),t)}}(n),i=e.match(this.eventSplitter),s=i[1],o=i[2];o===""?this.el.bind(s,r):(o.search(/_rel$/)!==-1&&(o=this[o+"Selector"]),this[o]&&this[o].length&&this.el.delegate(this[o]&&this[o].selector?this[o].selector:o,s,r))}},refreshElements:function(){var e=this;for(var t in this.elements){var n=this.elements[t];if(n.search(/_rel$/)!==-1){this[n+"Selector"]=t;var r=n.replace(/_rel$/,"");this[n]=function(t,n){return function(){return e[n]=e.$(t)}}(t,r)}else{var i=this.$(t);this[n]=i}}}};var h=function(e){var t=this,n=function(){t.apply(this,arguments)},r=function(e){var t=function(){};return t.prototype=e,new t};return n.prototype=r(this.prototype),$.extend(n.prototype,e),n};l.extend=c.extend=h,$.extend(l.prototype,a),window.FishMVC=t})(),define("lib/Fish",function(){});var JSON;JSON||(JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("lib/json2",function(){}),define("global/configs",{host:"./",apiHost:"./",ishopping:"ishopping2://"}),define("global/storage",["./common"],function(e){var t={}.toString,n=window.$;return{local:{set:function(e,t){console.log(this.ua),localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)},remove:function(e){return localStorage.removeItem(e)},removeAll:function(e){var t=localStorage;for(e in t)this.remove(e)}},session:{set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)},remove:function(e){sessionStorage.removeItem(e)},removeAll:function(e){var t=sessionStorage;for(e in t)this.remove(e)}},cookie:{setSession:function(e,t,n){var r=this._getCookieValue(e,t,n);document.cookie=r},setLocal:function(e,t,n){var r=this._getCookieValue(e,t,n)+this._getExpires(1e3);document.cookie=r},setLocalMaxSeconds:function(e,t,n,r){var i=(new Date).getTime()+n*1e3;this.pointTime(e.trim(),t,i,r)},pointTime:function(e,t,n,r){var i=new Date(n),s=this._getCookieValue(e,t,r)+";expires="+i.toGMTString()+this._getPath(r);document.cookie=s},pointMidNight:function(e,t,n,r){var i=new Date;n=parseInt(n)||1;var s=i.getFullYear()+"-"+i.getMonth()+"-"+(i.getDate()+n);this.pointTime(e,t,s,r)},get:function(e){var t=null,n=e+"=";return document.cookie.length>0&&(offset=document.cookie.indexOf(n),offset!=-1&&(offset+=n.length,end=document.cookie.indexOf(";",offset),end==-1&&(end=document.cookie.length),t=unescape(document.cookie.substring(offset,end)))),t},remove:function(e){this.setSession(e,"")},removeAll:function(){var e=document.cookie,t=e.split(";"),n;for(var r=0;r<t.length;r++)t[r]&&(n=t[r].split("="),n[0]&&this.remove(n[0].trim()))},_getExpires:function(e){if(e){var t=new Date;return t.setDate(t.getDate()+e),";expires="+t.toGMTString()}return},_getCookieValue:function(e,t,n){return e.trim()+"="+encodeURIComponent(t)+this._getPath(n)},_getPath:function(e){return e?";path="+e:""}}}}),define("global/hack",["./common"],function(e){var t={}.toString,n=window.navigator.userAgent,r=window.location.href,i=window.$,s=i.browser.version.toString(),o=i("#body");return{}}),define("global/common",["./configs","./storage","./hack"],function(e,t,n){var r={}.toString,i=window.$,s=window.navigator.userAgent;return window.com=common={isFunction:function(e){return r.call(e)=="[object Function]"},isString:function(e){return r.call(e)=="[object String]"},isArray:function(e){return r.call(e)=="[object Array]"},isObject:function(e){return r.call(e)=="[object Object]"},ua:s,getRender:function(e,t){return(new EJS({url:e})).render({md:t})},dialog:function(e){if(!e.content){var t=e.url||"tpl/dialog";delete e.url,e.content=this.getRender(t,e)}return dialog(e)},alert:function(e){return e||(e={}),e.content||(e.url=e.url||"tpl/alert"),e.className="alertDialog",this.dialog(e)},showLoading:function(){var e={url:"tpl/loading",className:"loadingDialog"};this.dialog(e)},removeLoading:function(){i(".loadingDialog").remove()},ajax:function(e){var t=this;e.url&&(/^[^\?]*\?/.test(e.url)?e.url+="&mdNmk="+Math.random():e.url+="?mdNmk="+Math.random());var n={type:"GET",url:this.host,data:"",dataType:"json",success:function(e){},error:function(){},complete:function(e){}};this.mix(n,e),n.success=function(t){e.success(t)},i.ajax(n)},mix:function(e,t){var n;for(n in t)e[n]=t[n]},clon:function(e){var t={},n=this;n.isArray(e)&&(t=[]);var r=function(e,t){if(n.isObject(e))for(k in e)e.hasOwnProperty(k)&&(n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]);else if(n.isArray(e))for(k in e)n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]}(e,t);return t},gather:{},query:function(e,t){if(!e)return!1;this._queryArray||(this._queryArray=[]);if(this._queryArray.length)return this._queryArray[e];t=t||window.location.href,t=t.replace(/#[^&]*$/,"");var n=/\?(.+)/,r=t.match(n);if(r&&r[1]){var i=r[1].split("&");for(a in i){var s=i[a].split("="),o=s[0],u=s[1];this._queryArray[o]=u}return this._queryArray[e]}return""}},common}),define("global/global",["./common","./configs","./storage","./hack"],function(e,t,n,r){var i={};return $.extend(i,e,t,n,r),i}),requirejs.config({baseUrl:"./js/",paths:{Fish:"./lib/Fish",json2:"./lib/json2",common:"./global/common"},shim:{common:{deps:["Fish","ejs","json2"]}},urlArgs:"v=0707205634"}),requirejs(["./lib/Fish","./lib/json2","./global/global"],function(){}),define("app",function(){});