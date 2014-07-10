define([],function(){function b(a){$.extend(this,{placeholder:"data-validator",context:window,container:null,errorClass:"validator_error",_counter:0},a||{})}b.prototype._validation=function(a){var c=null,d=a.attr(this.placeholder);if(d){var b=a.val(),d=$.parseJSON(d);for(v in d)if(v!="messages"){switch(v){case "maxLength":a.is("select")?a[0].options.length>d[v]&&(c=d.messages[v]):this[v](b,d[v])||(c=d.messages[v]);break;case "maxTo":case "maxEqualTo":case "minEqualTo":this[v](a,d[v])||(c=d.messages[v]);
break;case "custom":this[v](b,a,d)||(c=d.messages[v]);break;default:this[v](b,d[v])||(c=d.messages[v])}if(c)break}return c}};b.prototype.showLabel=function(a,c){var d=$("<label/>").addClass(this.errorClass).html("<span>"+c+"</span>");this.errorPlacement(d,a);a.addClass(this.errorClass);this.container&&this.container.append(d)};b.prototype.errorPlacement=function(a,c){c.parent().append(a)};b.prototype.clear=function(){$(this.context).find("label[class="+this.errorClass+"]").remove();$(this.context).find("."+
this.errorClass).removeClass(this.errorClass)};b.prototype.valid=function(a){this.clear();var c=!0;(a?$(a):$(this.context).find("["+this.placeholder+"]")).each(this.hitch(this,function(a,b){var e=this._validation($(b));e&&(this.showLabel($(b),e),c=!1)}));return c};b.prototype.hitch=function(a,c){return!a?c:function(){return c.apply(a,arguments||[])}};b.prototype.custom=function(){return!0};b.prototype.required=function(a){return a==null?!1:!/^\s*$/.test(a)};b.prototype.range=function(a,c){if(!this.required(a))return!0;
a=parseFloat(a);return c[0]<=a&&a<=c[1]};b.prototype.rangeString=function(a,c){if(!this.required(a))return!0;var b=a.length;return c[0]<=b&&b<=c[1]};b.prototype.maxLength=function(a,c){return!this.required(a)?!0:a.length<=c};b.prototype.date=function(a){return!this.required(a)?!0:!/Invalid|NaN/.test((new Date(a)).toString())};b.prototype.number=function(a){return!this.required(a)?!0:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)};b.prototype.digits=function(a){return!this.required(a)?!0:/^\d+$/.test(a)};
b.prototype.phoneNo=function(a){return!this.required(a)?!0:/^[1][3458]\d{9}$/.test(a)};b.prototype.image=function(a){if(!this.required(a))return!0;a=a.split(".");return a.length<=1?!1:/^(jpg|gif|png|bmp)$/i.test(a[a.length-1].toLocaleLowerCase())};b.prototype.url=function(a){return!this.required(a)?!0:/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)};
b.prototype.maxTo=function(a,c){a=$(a);if(!this.required(a.val()))return!0;var b=parseFloat(a.val());tv=c==="prev"?parseFloat(a.prev().val()):parseFloat($(c).val());return tv<b};b.prototype.maxEqualTo=function(a,c){a=$(a);if(!this.required(a.val()))return!0;var b=parseFloat(a.val());tv=c==="prev"?parseFloat(a.prev().val()):parseFloat($(c).val());return tv<=b};b.prototype.minEqualTo=function(a,b){a=$(a);if(!this.required(a.val()))return!0;var d=parseFloat(a.val());tv=b==="prev"?parseFloat(a.prev().val()):
parseFloat($(b).val());return d<=tv};b.prototype.match=function(a,b){return!this.required(a)?!0:RegExp(b).test(a)};return b});
