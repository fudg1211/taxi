define(["./global/global","./data/data"],function(f,e){var d;new (FishMVC.View.extend({init:function(){this.doJiantou();this.initPartx()},elements:{".J_nextPage":"nextPage",".J_part02_position":"part02Position","#part02Zhizheng":"part02Zhizheng","#part03Next":"part03Next","#part03Car":"part03Car",".part03-cart .img":"cartImg",".part03-desc .img":"cartImgDesc",".touchslider-item img":"touchsliderItemImg",".part03Prev img":"part03Prev",".part03Next img":"part03Next",".partJiantou img":"partJiantou",
".part16-phone .part02-button":"part16PhoneButton",".part16-car img":"part16Car",".part16-people img":"part16People","#J_part02_position":"J_part02_position_rel",".touchslider-nav-item-current":"touchslider-nav-item-current_rel"},events:{"click nextPage":"doNextPage","click part02Position":"doPart02Position","click part03Next":"doPart03Next","click part16PhoneButton":"doPart16PhoneButton"},doNextPage:function(b){var b=b.parents(".page"),a=b.next();a&&a.length&&a.hasClass("part03")&&this.initPart03();
a&&a.length&&a.hasClass("partx")&&this.initPartx();a&&a.length&&a[0].nodeName.toLocaleLowerCase()!=="script"&&(b.hide(),a.show())},doPart02Position:function(b){var a=b.data("xy"),c=this,d="translate("+a[0]+"px,"+a[1]+"px)";this.J_part02_position_rel().removeAttr("id");b.attr("id","J_part02_position");this.part02Zhizheng.css({opacity:1,"-webkit-animation":"none"});setTimeout(function(){c.part02Zhizheng.css("-webkit-transform",d)},100)},doPart03Next:function(){var b=this.part03Car.next();if(b.attr("class")!==
"img")return!1;this.part03Car.hide().removeAttr("id");b.show().attr("id","part03Car")},initPart03:function(){this.touchsliderItemImg.show();$(".touchslider").touchSlider({});this.doPart03Jiantou()},initPartx:function(){var b=this.J_part02_position_rel().attr("title")||"\u4e1c\u76f4\u95e8",a=this["touchslider-nav-item-current_rel"]().attr("title")||"\u7279\u62c9\u65af",b=e.getPrice(b,a),a=(new EJS({element:"parxTpl"})).render({data:b});console.log(b);console.log(a);$("#partx-phone").html(a)},doPart03Jiantou:function(){var b=
this,a=0;setInterval(function(){b.part03Prev.css("opacity",0.5);b.part03Next.css("opacity",0.5);b.part03Prev.eq(a).css("opacity",1);b.part03Next.eq(a).css("opacity",1);a++;a>2&&(a=0);console.log(a)},300)},doJiantou:function(){var b=this,a=0;setInterval(function(){b.partJiantou.css("opacity",0.5);b.partJiantou.eq(a).css("opacity",1);a++;a>2&&(a=0)},300)},doPart16PhoneButton:function(b){var a=b.data("temp"),c=this,a=a.split(",");if(c.part16Car.hasClass(a[0]))return!1;clearTimeout(d);c.part16People.fadeIn("fast");
c.part16Car.css("-webkit-transition","-webkit-transform 0s ease-out");c.part16Car.removeClass();d=setTimeout(function(){c.part16Car.css("-webkit-transition","-webkit-transform "+a[1]+"s ease-out")},200);d=setTimeout(function(){c.part16Car[0].className=a[0];d=setTimeout(function(){c.part16People.eq(a[2]).fadeOut("slow");c.part16Car.css("-webkit-transition","-webkit-transform "+3/Number(a[1])+"s ease-in");d=setTimeout(function(){c.part16Car[0].className="part16-car-end";d=setTimeout(function(){c.part16People.eq(a[2]).fadeIn("fast");
c.part16Car.removeClass().removeAttr("style")},3/Number(a[1])*1E3)},500)},Number(a[1])*1E3)},400)}}))({el:$(".wrapper")})});
