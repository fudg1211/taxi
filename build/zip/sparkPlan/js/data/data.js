define(["../global/global"],function(a){return{getPromotionLink:function(c,b){a.ajax({url:a.apiHost+"getCpsLink.do",data:c,success:function(a){b&&com.isFunction(b)&&b(a)}})}}});
