/*
 TouchSlider 0.95
 Licensed under the MIT license.
 http://touchslider.com
 */

(function(){var e=window,t={};t.Version="0.1.0",t.$=e.jQuery||e.Zepto||e.$;var n=function(e){return{}.toString.call(e)=="[object Function]"},r=function(e){return{}.toString.call(e)=="[object String]"},i=function(e){return{}.toString.call(e)=="[object Array]"},s=function(e){return{}.toString.call(e)=="[object Object]"},o=function(e){var t={},n=this;n.isArray(e)&&(t=[]);var r=function(e,t){if(n.isObject(e))for(k in e)e.hasOwnProperty(k)&&(n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]);else if(n.isArray(e))for(k in e)n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]}(e,t);return t},u=[].slice,a=t.events={on:function(e,t,n){this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n||this}),this},once:function(e,t,n){var r=this,i=function(){r.off(e),t.apply(this,arguments)};this.on(e,i,n)},off:function(e){var t,n,i,s,o;if(!e)return this;r(e)?t=[e]:t=e;for(n=0,i=t.length;n<i;n++)e=t[n],delete this._events[e]},trigger:function(e){if(!this._events)return this;var t=u.call(arguments,1),n=this._events[e],r=this._events.all;return n&&f(n,t),r&&f(r,arguments),this}},f=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.context);return;case 1:while(++r<i)(n=e[r]).callback.call(n.context,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.context,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.context,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.context,t)}},l=t.Module=function(e,t){this.attributes={},this.set(e,t)};l.prototype={get:function(e){return this.attributes[e]},del:function(e){delete this.attributes[e],this.trigger("del:"+e,this)},set:function(e,t){var n,r,i,s,o=[],u=[],a;t||(t={}),r=t.silent,i=t.del,o=this.attributes;for(n in e)a=e[n],u.push(n),i?this.del(n):o[n]=a;if(!r)for(var f=0;f<u.length;f++)this.trigger("change:"+u[f],this,o[u[f]],t);return this}};var c=t.View=function(e){this.initializer.apply(this,arguments),this.init.apply(this,arguments),this.fn=this.constructor.prototype};c.prototype={proxy:function(e){return $.proxy(e,this)},include:function(e){$.extend(this.fn,e)},init:function(){},initializer:function(e){for(var t in e)this[t]=e[t];this.elements&&this.refreshElements(),this.events&&this.delegateEvents()},$:function(e){return this.el||(this.el=$(document.body)),this.el.find(e)},eventSplitter:/^(\w+)\s*(.*)$/,delegateEvents:function(){for(var e in this.events){var t=this.events[e],n=this.proxy(this[t]),r=function(e){return function(t){e||console.log("未找到方法"),e($(this),t)}}(n),i=e.match(this.eventSplitter),s=i[1],o=i[2];document.body.ontouchstart===null&&s==="click"&&(s="touchend"),o===""?this.el.bind(s,r):this.el.delegate(this[o+"_key"],s,r)}},refreshElements:function(){var e=this;for(var t in this.elements){var n=this.elements[t];this[n+"_key"]=t;if(n.search(/_rel$/)!==-1){this[n+"Selector"]=t;var r=n.replace(/_rel$/,"");this[n]=function(t,n){return function(){return e[n]=e.$(t)}}(t,r)}else{var i=this.$(t);this[n]=i}}}};var h=function(e){var t=this,n=function(){t.apply(this,arguments)},r=function(e){var t=function(){};return t.prototype=e,new t};return n.prototype=r(this.prototype),$.extend(n.prototype,e),n};l.extend=c.extend=h,$.extend(l.prototype,a),window.FishMVC=t})(),define("lib/Fish",function(){}),function(){var rsplit=function(e,t){var n=t.exec(e),r=new Array,i,s,o;while(n!=null)i=n.index,s=t.lastIndex,i!=0&&(o=e.substring(0,i),r.push(e.substring(0,i)),e=e.slice(i)),r.push(n[0]),e=e.slice(n[0].length),n=t.exec(e);return!e==""&&r.push(e),r},chop=function(e){return e.substr(0,e.length-1)},extend=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};EJS=function(e){e=typeof e=="string"?{view:e}:e,this.set_options(e);if(e.precompiled){this.template={},this.template.process=e.precompiled,EJS.update(this.name,this);return}if(e.element){if(typeof e.element=="string"){var t=e.element;e.element=document.getElementById(e.element);if(e.element==null)throw t+"does not exist!"}e.element.value?this.text=e.element.value:this.text=e.element.innerHTML,this.name=e.element.id,this.type="["}else if(e.url){e.url=EJS.endExt(e.url,this.extMatch),this.name=this.name?this.name:e.url;var n=e.url,r=EJS.get(this.name,this.cache);if(r)return r;if(r==EJS.INVALID_PATH)return null;try{this.text=EJS.request(n+(this.cache?"":"?"+Math.random()))}catch(i){}if(this.text==null)throw{type:"EJS",message:"There is no template at "+n}}var r=new EJS.Compiler(this.text,this.type);r.compile(e,this.name),EJS.update(this.name,this),this.template=r},EJS.prototype={render:function(e,t){e=e||{},this._extra_helpers=t;var n=new EJS.Helpers(e,t||{});return this.template.process.call(e,e,n)},update:function(element,options){typeof element=="string"&&(element=document.getElementById(element));if(options==null)return _template=this,function(e){EJS.prototype.update.call(_template,element,e)};typeof options=="string"?(params={},params.url=options,_template=this,params.onComplete=function(request){var object=eval(request.responseText);EJS.prototype.update.call(_template,element,object)},EJS.ajax_request(params)):element.innerHTML=this.render(options)},out:function(){return this.template.out},set_options:function(e){this.type=e.type||EJS.type,this.cache=e.cache!=null?e.cache:EJS.cache,this.text=e.text||null,this.name=e.name||null,this.ext=e.ext||EJS.ext,this.extMatch=new RegExp(this.ext.replace(/\./,"."))}},EJS.endExt=function(e,t){return e?(t.lastIndex=0,e+(t.test(e)?"":this.ext)):null},EJS.Scanner=function(e,t,n){extend(this,{left_delimiter:t+"%",right_delimiter:"%"+n,double_left:t+"%%",double_right:"%%"+n,left_equal:t+"%=",left_comment:t+"%#"}),this.SplitRegexp=t=="["?/(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/:new RegExp("("+this.double_left+")|(%%"+this.double_right+")|("+this.left_equal+")|("+this.left_comment+")|("+this.left_delimiter+")|("+this.right_delimiter+"\n)|("+this.right_delimiter+")|(\n)"),this.source=e,this.stag=null,this.lines=0},EJS.Scanner.to_text=function(e){return e==null||e===undefined?"":e instanceof Date?e.toDateString():e.toString?e.toString():""},EJS.Scanner.prototype={scan:function(e){scanline=this.scanline,regex=this.SplitRegexp;if(!this.source==""){var t=rsplit(this.source,/\n/);for(var n=0;n<t.length;n++){var r=t[n];this.scanline(r,regex,e)}}},scanline:function(e,t,n){this.lines++;var r=rsplit(e,t);for(var i=0;i<r.length;i++){var s=r[i];if(s!=null)try{n(s,this)}catch(o){throw{type:"EJS.Scanner",line:this.lines}}}}},EJS.Buffer=function(e,t){this.line=new Array,this.script="",this.pre_cmd=e,this.post_cmd=t;for(var n=0;n<this.pre_cmd.length;n++)this.push(e[n])},EJS.Buffer.prototype={push:function(e){this.line.push(e)},cr:function(){this.script=this.script+this.line.join("; "),this.line=new Array,this.script=this.script+"\n"},close:function(){if(this.line.length>0){for(var e=0;e<this.post_cmd.length;e++)this.push(pre_cmd[e]);this.script=this.script+this.line.join("; "),line=null}}},EJS.Compiler=function(e,t){this.pre_cmd=["var ___ViewO = [];"],this.post_cmd=new Array,this.source=" ",e!=null&&(typeof e=="string"?(e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),this.source=e):e.innerHTML&&(this.source=e.innerHTML),typeof this.source!="string"&&(this.source="")),t=t||"<";var n=">";switch(t){case"[":n="]";break;case"<":break;default:throw t+" is not a supported deliminator"}this.scanner=new EJS.Scanner(this.source,t,n),this.out=""},EJS.Compiler.prototype={compile:function(options,name){options=options||{},this.out="";var put_cmd="___ViewO.push(",insert_cmd=put_cmd,buff=new EJS.Buffer(this.pre_cmd,this.post_cmd),content="",clean=function(e){return e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/"/g,'\\"'),e};this.scanner.scan(function(e,t){if(t.stag==null)switch(e){case"\n":content+="\n",buff.push(put_cmd+'"'+clean(content)+'");'),buff.cr(),content="";break;case t.left_delimiter:case t.left_equal:case t.left_comment:t.stag=e,content.length>0&&buff.push(put_cmd+'"'+clean(content)+'")'),content="";break;case t.double_left:content+=t.left_delimiter;break;default:content+=e}else switch(e){case t.right_delimiter:switch(t.stag){case t.left_delimiter:content[content.length-1]=="\n"?(content=chop(content),buff.push(content),buff.cr()):buff.push(content);break;case t.left_equal:buff.push(insert_cmd+"(EJS.Scanner.to_text("+content+")))")}t.stag=null,content="";break;case t.double_right:content+=t.right_delimiter;break;default:content+=e}}),content.length>0&&buff.push(put_cmd+'"'+clean(content)+'")'),buff.close(),this.out=buff.script+";";var to_be_evaled="/*"+name+"*/this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {"+this.out+" return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};",error,e,i=0;try{eval(to_be_evaled)}catch(e){if(typeof JSLINT=="undefined")throw e;JSLINT(this.out);for(;i<JSLINT.errors.length;i++){error=JSLINT.errors[i];if(error.reason!="Unnecessary semicolon.")throw error.line++,e=new Error,e.lineNumber=error.line,e.message=error.reason,options.view&&(e.fileName=options.view),e}}}},EJS.config=function(e){EJS.cache=e.cache!=null?e.cache:EJS.cache,EJS.type=e.type!=null?e.type:EJS.type,EJS.ext=e.ext!=null?e.ext:EJS.ext;var t=EJS.templates_directory||{};EJS.templates_directory=t,EJS.get=function(e,n){return n==0?null:t[e]?t[e]:null},EJS.update=function(e,n){if(e==null)return;t[e]=n},EJS.INVALID_PATH=-1},EJS.config({cache:!0,type:"<",ext:".ejs"}),EJS.Helpers=function(e,t){this._data=e,this._extras=t,extend(this,t)},EJS.Helpers.prototype={view:function(e,t,n){return n||(n=this._extras),t||(t=this._data),(new EJS(e)).render(t,n)},to_text:function(e,t){return e==null||e===undefined?t||"":e instanceof Date?e.toDateString():e.toString?e.toString().replace(/\n/g,"<br />").replace(/''/g,"'"):""}},EJS.newRequest=function(){var e=[function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(var t=0;t<e.length;t++)try{var n=e[t]();if(n!=null)return n}catch(r){continue}},EJS.request=function(e){var t=new EJS.newRequest;t.open("GET",e,!1);try{t.send(null)}catch(n){return null}return t.status==404||t.status==2||t.status==0&&t.responseText==""?null:t.responseText},EJS.ajax_request=function(e){e.method=e.method?e.method:"GET";var t=new EJS.newRequest;t.onreadystatechange=function(){t.readyState==4&&(t.status==200?e.onComplete(t):e.onComplete(t))},t.open(e.method,e.url),t.send(null)}}(),EJS.Helpers.prototype.date_tag=function(e,t,n){t instanceof Date||(t=new Date);var r=["January","February","March","April","May","June","July","August","September","October","November","December"],i=[],s=[],o=[],u=t.getFullYear(),a=t.getMonth(),f=t.getDate();for(var l=u-15;l<u+15;l++)i.push({value:l,text:l});for(var c=0;c<12;c++)s.push({value:c,text:r[c]});for(var h=0;h<31;h++)o.push({value:h+1,text:h+1});var p=this.select_tag(e+"[year]",u,i,{id:e+"[year]"}),d=this.select_tag(e+"[month]",a,s,{id:e+"[month]"}),v=this.select_tag(e+"[day]",f,o,{id:e+"[day]"});return p+d+v},EJS.Helpers.prototype.form_tag=function(e,t){return t=t||{},t.action=e,t.multipart==1&&(t.method="post",t.enctype="multipart/form-data"),this.start_tag_for("form",t)},EJS.Helpers.prototype.form_tag_end=function(){return this.tag_end("form")},EJS.Helpers.prototype.hidden_field_tag=function(e,t,n){return this.input_field_tag(e,t,"hidden",n)},EJS.Helpers.prototype.input_field_tag=function(e,t,n,r){return r=r||{},r.id=r.id||e,r.value=t||"",r.type=n||"text",r.name=e,this.single_tag_for("input",r)},EJS.Helpers.prototype.is_current_page=function(e){return window.location.href==e||window.location.pathname==e?!0:!1},EJS.Helpers.prototype.link_to=function(e,t,n){if(!e)var e="null";if(!n)var n={};return n.confirm&&(n.onclick=' var ret_confirm = confirm("'+n.confirm+'"); if(!ret_confirm){ return false;} ',n.confirm=null),n.href=t,this.start_tag_for("a",n)+e+this.tag_end("a")},EJS.Helpers.prototype.submit_link_to=function(e,t,n){if(!e)var e="null";if(!n)var n={};return n.onclick=n.onclick||"",n.confirm&&(n.onclick=' var ret_confirm = confirm("'+n.confirm+'"); if(!ret_confirm){ return false;} ',n.confirm=null),n.value=e,n.type="submit",n.onclick=n.onclick+(t?this.url_for(t):"")+"return false;",this.start_tag_for("input",n)},EJS.Helpers.prototype.link_to_if=function(e,t,n,r,i,s){return this.link_to_unless(e==0,t,n,r,i,s)},EJS.Helpers.prototype.link_to_unless=function(e,t,n,r,i){return r=r||{},e?i&&typeof i=="function"?i(t,n,r,i):t:this.link_to(t,n,r)},EJS.Helpers.prototype.link_to_unless_current=function(e,t,n,r){return n=n||{},this.link_to_unless(this.is_current_page(t),e,t,n,r)},EJS.Helpers.prototype.password_field_tag=function(e,t,n){return this.input_field_tag(e,t,"password",n)},EJS.Helpers.prototype.select_tag=function(e,t,n,r){r=r||{},r.id=r.id||e,r.value=t,r.name=e;var i="";i+=this.start_tag_for("select",r);for(var s=0;s<n.length;s++){var o=n[s],u={value:o.value};o.value==t&&(u.selected="selected"),i+=this.start_tag_for("option",u)+o.text+this.tag_end("option")}return i+=this.tag_end("select"),i},EJS.Helpers.prototype.single_tag_for=function(e,t){return this.tag(e,t,"/>")},EJS.Helpers.prototype.start_tag_for=function(e,t){return this.tag(e,t)},EJS.Helpers.prototype.submit_tag=function(e,t){return t=t||{},t.type=t.type||"submit",t.value=e||"Submit",this.single_tag_for("input",t)},EJS.Helpers.prototype.tag=function(e,t,n){if(!n)var n=">";var r=" ";for(var i in t){if(t[i]!=null)var s=t[i].toString();else var s="";i=="Class"&&(i="class"),s.indexOf("'")!=-1?r+=i+'="'+s+'" ':r+=i+"='"+s+"' "}return"<"+e+r+n},EJS.Helpers.prototype.tag_end=function(e){return"</"+e+">"},EJS.Helpers.prototype.text_area_tag=function(e,t,n){return n=n||{},n.id=n.id||e,n.name=n.name||e,t=t||"",n.size&&(n.cols=n.size.split("x")[0],n.rows=n.size.split("x")[1],delete n.size),n.cols=n.cols||50,n.rows=n.rows||4,this.start_tag_for("textarea",n)+t+this.tag_end("textarea")},EJS.Helpers.prototype.text_tag=EJS.Helpers.prototype.text_area_tag,EJS.Helpers.prototype.text_field_tag=function(e,t,n){return this.input_field_tag(e,t,"text",n)},EJS.Helpers.prototype.url_for=function(e){return'window.location="'+e+'";'},EJS.Helpers.prototype.img_tag=function(e,t,n){return n=n||{},n.src=e,n.alt=t,this.single_tag_for("img",n)},define("lib/ejs",function(){});var JSON;JSON||(JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("lib/json2",function(){}),define("global/configs",{host:"./",apiHost:"./",ishopping:"ishopping2://"}),define("global/storage",["./common"],function(e){var t={}.toString,n=window.$;return{local:{set:function(e,t){console.log(this.ua),localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)},remove:function(e){return localStorage.removeItem(e)},removeAll:function(e){var t=localStorage;for(e in t)this.remove(e)}},session:{set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)},remove:function(e){sessionStorage.removeItem(e)},removeAll:function(e){var t=sessionStorage;for(e in t)this.remove(e)}},cookie:{setSession:function(e,t,n){var r=this._getCookieValue(e,t,n);document.cookie=r},setLocal:function(e,t,n){var r=this._getCookieValue(e,t,n)+this._getExpires(1e3);document.cookie=r},setLocalMaxSeconds:function(e,t,n,r){var i=(new Date).getTime()+n*1e3;this.pointTime(e.trim(),t,i,r)},pointTime:function(e,t,n,r){var i=new Date(n),s=this._getCookieValue(e,t,r)+";expires="+i.toGMTString()+this._getPath(r);document.cookie=s},pointMidNight:function(e,t,n,r){var i=new Date;n=parseInt(n)||1;var s=i.getFullYear()+"-"+i.getMonth()+"-"+(i.getDate()+n);this.pointTime(e,t,s,r)},get:function(e){var t=null,n=e+"=";return document.cookie.length>0&&(offset=document.cookie.indexOf(n),offset!=-1&&(offset+=n.length,end=document.cookie.indexOf(";",offset),end==-1&&(end=document.cookie.length),t=unescape(document.cookie.substring(offset,end)))),t},remove:function(e){this.setSession(e,"")},removeAll:function(){var e=document.cookie,t=e.split(";"),n;for(var r=0;r<t.length;r++)t[r]&&(n=t[r].split("="),n[0]&&this.remove(n[0].trim()))},_getExpires:function(e){if(e){var t=new Date;return t.setDate(t.getDate()+e),";expires="+t.toGMTString()}return},_getCookieValue:function(e,t,n){return e.trim()+"="+encodeURIComponent(t)+this._getPath(n)},_getPath:function(e){return e?";path="+e:""}}}}),define("global/hack",["./common"],function(e){var t={}.toString,n=window.navigator.userAgent,r=window.location.href,i=window.$,s=i("#body");return{}}),define("global/common",["./configs","./storage","./hack"],function(e,t,n){var r={}.toString,i=window.$,s=window.navigator.userAgent;return window.com=common={isFunction:function(e){return r.call(e)=="[object Function]"},isString:function(e){return r.call(e)=="[object String]"},isArray:function(e){return r.call(e)=="[object Array]"},isObject:function(e){return r.call(e)=="[object Object]"},ua:s,getRender:function(e,t){return(new EJS({url:e})).render({md:t})},dialog:function(e){if(!e.content){var t=e.url||"tpl/dialog";delete e.url,e.content=this.getRender(t,e)}return dialog(e)},alert:function(e){return e||(e={}),e.content||(e.url=e.url||"tpl/alert"),e.className="alertDialog",this.dialog(e)},showLoading:function(){var e={url:"tpl/loading",className:"loadingDialog"};this.dialog(e)},removeLoading:function(){i(".loadingDialog").remove()},ajax:function(e){var t=this;e.url&&(/^[^\?]*\?/.test(e.url)?e.url+="&mdNmk="+Math.random():e.url+="?mdNmk="+Math.random());var n={type:"GET",url:this.host,data:"",dataType:"json",success:function(e){},error:function(){},complete:function(e){}};this.mix(n,e),n.success=function(t){e.success(t)},i.ajax(n)},mix:function(e,t){var n;for(n in t)e[n]=t[n]},clon:function(e){var t={},n=this;n.isArray(e)&&(t=[]);var r=function(e,t){if(n.isObject(e))for(k in e)e.hasOwnProperty(k)&&(n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]);else if(n.isArray(e))for(k in e)n.isObject(e[k])?(t[k]={},arguments.callee(e[k],t[k])):n.isArray(e[k])?(t[k]=[],arguments.callee(e[k],t[k])):t[k]=e[k]}(e,t);return t},gather:{},query:function(e,t){if(!e)return!1;this._queryArray||(this._queryArray=[]);if(this._queryArray.length)return this._queryArray[e];t=t||window.location.href,t=t.replace(/#[^&]*$/,"");var n=/\?(.+)/,r=t.match(n);if(r&&r[1]){var i=r[1].split("&");for(a in i){var s=i[a].split("="),o=s[0],u=s[1];this._queryArray[o]=u}return this._queryArray[e]}return""}},common}),define("global/global",["./common","./configs","./storage"],function(e,t,n){var r={};return $.extend(r,e,t,n),r}),function(e,t){window.touchSlider=function(n){function y(e){p.removeClass(n.currentClass).eq(e).addClass(n.currentClass)}function b(e,n){var r=s.current;r!==e&&(e=e!==t?e:r+1,m.to(e,{complete:n}))}function w(e){m.to(s.current+1,{dirX:1,complete:e})}function E(e){m.to(s.current-1,{dirX:-1,complete:e})}function N(){x&&C()}function C(){return x=!0,S||(clearTimeout(T),T=setTimeout(function(){!m.moving&&!S&&w()},n.delay)),n.container}function k(){return clearTimeout(T),x=!1,n.container}function L(){var t=e(document),n,i,s=!1,h,p,d,v,y,b,w,E,S,x,T,N=function(e){if(e.which>1)return;s&&t.triggerHandler(f+"."+r),s=!0,i=!1,n=e.timeStamp,y=x=0,h=[0,0,0,n];if(e.originalEvent.touches){t.one(u,C);return}e.preventDefault(),d=v=e.pageX,E=S=e.pageY,w=c[0].offsetLeft,p=[0,0,0,d],t.bind(a,k),t.one(f+"."+r,L),m.moveStart(e)},C=function(e){if(e.originalEvent.touches.length!==1)return;d=v=e.pageX=e.originalEvent.touches[0].pageX,E=S=e.pageY=e.originalEvent.touches[0].pageY,b=T=0,w=(new WebKitCSSMatrix(window.getComputedStyle(c[0]).webkitTransform)).e,p=[0,0,0,d],t.bind(a,k),t.one(f,L),m.moveStart(e)},k=function(t){var n,r;if(t.originalEvent.touches&&o){if(t.originalEvent.touches.length!==1)return;n=t.pageX=t.originalEvent.touches[0].pageX,r=t.pageY=t.originalEvent.touches[0].pageY,b+=Math.abs(n-v),T+=Math.abs(r-S);if(Math.abs(b-T)>50){var s=b;b=Math.min(100,Math.max(0,b-T)),T=Math.min(100,Math.max(0,T-s))}if(n===v)return;i||(b>T?(t.preventDefault(),i=!0):L(t))}else{n=t.pageX,r=t.pageY;if(n===v)return;e.browser.msie&&t.preventDefault()}y+=Math.abs(n-v),x+=Math.abs(r-S),h.shift(),h.push(t.timeStamp),p.shift(),p.push(n),m.move(t,v),v=n,S=r},L=function(e){s=!1;if(!e.originalEvent||e.originalEvent.touches)e.pageX=v,e.pageY=S;t.unbind(a,k);var r=h.length,i=0,o=0;while(--r>0)if(h[r-1]){var u=p[r]-p[r-1];i+=Math.abs(u)/(h[r]-h[r-1]),u!==0&&(o=u>0?-1:1)}i/=h.length,m.moveEnd(e,i,o,n,y,x),g=!1,y+x>4&&l.one("click",function(e){e.preventDefault()})};l.bind(u,N)}n=n||{};var r=n.namespace||"touchslider",i=e(n.container);if(i.length!==1){i.each(function(){touchSlider({container:this})});return}n=e.extend({autoplay:!1,delay:3e3,margin:5,viewport:"."+r+"-viewport",prev:"."+r+"-prev",next:"."+r+"-next",pagination:"."+r+"-nav-item",currentClass:r+"-nav-item-current",duration:350,mouseTouch:!0},n);var s={current:0,step:b,next:w,prev:E,start:C,stop:k},o="ontouchstart"in window&&"WebKitCSSMatrix"in window,u="touchstart",a="touchmove",f="touchend",l=e(n.viewport,i),c=n.scroller?e(n.scroller,i):l.children(),h=c.children(),p=e(n.pagination,i);if(c.css("position")!=="absolute"){var d=l.height();l.css({height:d,position:"relative"}),c.css({position:"absolute",left:0,height:d,width:1e5})}o||(u="mousedown",a="mousemove",f="mouseup"),h.css("position","absolute");var v=o?function(e,n,r){if(n===t)return(new WebKitCSSMatrix(getComputedStyle(e.jquery?e[0]:e).webkitTransform)).e;e.css({webkitTransitionDuration:r?r+"ms":"0",webkitTransform:function(e){return"translate3d("+(typeof n=="number"?n:n.call(this,e))+"px,0,0)"}})}:function(e,n){if(n===t)return parseInt((e.jquery?e[0]:e).style.left,10);e.css("left",n)};o&&h.css({webkitTransitionProperty:"-webkit-transform",webkitTransitionTimingFunction:"cubic-bezier(0,0,0.25,1)"}),v(h.not(h[0]),1e4),v(h.eq(0),0);var m=function(){var r=[0],i=[0],u=e.noop;return{moving:!1,init:function(){c.bind("webkitTransitionEnd",function(){u()})},to:function(a,f){f=f||{},a>=h.length?a=0:a<0&&(a=h.length-1);var l=n.duration,p=h.eq(a),d=e.inArray(a,r),g=0;c.stop(),m.moving=!0,clearTimeout(T);if(d!==-1)g=i[d];else{var b,w=h.index(p);d=t;if(f.dirX===-1)i.unshift(0),r.unshift(w);else if(f.dirX===1)i.push(0),r.push(w);else{for(b=r.length-1;b>=0;b--)if(r[b]<w){i.splice(b+1,0,0),r.splice(b+1,0,w),d=0;break}d===t&&(i.unshift(i),r.unshift(w))}d=e.inArray(w,r);if(d===0)g=i[1]-(p.outerWidth()+n.margin),v(p,g),i[d]=g;else if(d===r.length-1)g=i[d-1]+h.eq(r[d-1]).outerWidth()+n.margin,v(p,g),i[d]=g;else{var E=p.outerWidth();p.css("opacity",0),g=i[d+1]-Math.round((E+n.margin)/2),i[d]=g,v(p,g);var S=g,x=r.length;for(b=d-1;b>=0;b--)S-=h.eq(r[b]).outerWidth()+n.margin,i[b]=S;var C=g;for(b=d+1;b<x;b++)C+=h.eq(r[b]).outerWidth()+n.margin,i[b]=C;for(b=0;b<x;b++)h.eq(r[b]).animate({left:i[b]},{duration:l,queue:!1,complete:function(){p.is(this)&&p.animate({opacity:1},l)}})}}f.pxInMs&&(l=Math.min(Math.max(Math.round(Math.abs(v(c))/f.pxInMs),100),l)),u=function(){v(h.not(p),-1e4),r=[h.index(p)],i=[g],f.complete&&f.complete(),m.moving=!1,N()},o?v(c,-g,l):c.animate({left:-g},{duration:l,queue:!1,complete:u}),s.current=a,y(a)},stop:function(){o?v(c,v(c)):c.stop()},moveStart:function(e){m.moving=!0,clearTimeout(T),c.stop(),m.startPageX=e.pageX;var t=v(c),n;m.leftCount=t,r[0]===0?i[0]+t>0&&(m.leftCount=t+(i[0]+t)*3):r[r.length-1]===h.length-1&&(n=i[r.length-1]+t,n<0&&(m.leftCount=t+n*3))},move:function(e,t){var s=e.pageX-t,o=v(c),u=h.eq(r[0]),a=r.length-1,f=h.eq(r[a]),p,d,g;m.leftCount+=s;if(s>0)while(r[0]!==0&&o+i[0]+s>n.margin)p=h.eq(r[0]-1),d=i[0]-p.outerWidth()-n.margin,v(p,d),i.unshift(d),r.unshift(r[0]-1),a++,u=p;(s>0&&o+i[0]+s>0||s<0&&o+i[0]>0)&&r[0]===0&&(g=Math.min(Math.round((m.leftCount+i[0])/4),l.innerWidth()/2),s=g-(o+i[0]));if(s<0)while(!f.is(h.last())&&o+i[a]+s+f.outerWidth()+n.margin<l.innerWidth())p=h.eq(r[a]+1),d=i[a]+f.outerWidth()+n.margin,v(p,d),i.push(d),r.push(r[a++]+1),f=p;(s>0&&o+i[a]<0||s<0&&o+i[a]+s<0)&&f.is(h.last())&&(g=Math.max(Math.round((m.leftCount+i[a])/4),-l.innerWidth()/2),s=g-(o+i[a])),v(c,o+s)},moveEnd:function(e,t,n,s,o,u){var a=r.length,f=v(c),p=a-1,d;if(i[0]+f>0)p=0;else if(!(i[r.length-1]+f<0)){d={pxInMs:t};var y,b,w=a-1,E=l.innerWidth();for(y=0;y<a-1;y++){b=i[y]+h.eq(r[y]).outerWidth()+f;if(b>0&&b>E-(i[y+1]+f)){w=y;break}}if(g)p=w;else{var S=a-1,x=Math.round(c.offset().left);for(y=0;y<a;y++)if(i[y]+x>e.pageX){S=y-1;break}p=w,w===S&&e.timeStamp-s<1e3&&o+u>Math.sqrt(Math.pow(l.height(),2)+Math.pow(E,2))*.05&&(p=Math.max(0,Math.min(a-1,p+n)))}}p=r[p],m.to(p,d)}}}();m.init();if(o){var g=!1;c.bind("webkitTransitionStart",function(){g=!0}),c.bind("webkitTransitionEnd",function(){g=!1})}var S=!1,x=!1,T;l.hover(function(){clearTimeout(T),S=!0},function(){S=!1,N()}),p.click(function(){b(p.index(this))}),e(n.prev,i).click(function(){E()}),e(n.next,i).click(function(){w()}),n.mouseTouch&&L(),n.autoplay&&C(),i.data(r,s)},e.fn.touchSlider=function(e){return e=e||{},e.container=this,touchSlider(e),this}}(jQuery),define("lib/slider",function(){}),requirejs.config({baseUrl:"./js/",paths:{Fish:"./lib/Fish",json2:"./lib/json2",ejs:"./lib/ejs",common:"./global/common"},shim:{common:{deps:["Fish","ejs","json2"]}},urlArgs:"v=0717224408"}),requirejs(["./lib/Fish","./lib/ejs","./lib/json2","./global/global","./lib/slider"],function(){}),define("app",function(){});