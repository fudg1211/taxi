/**
 * Created with IntelliJ IDEA.
 * User: fudongguang
 * Date: 13-10-9
 * Time: AM10:48
 * To change this template use File | Settings | File Templates.
 */
define(['./global/global'], function (g) {
    var part16Timeout;

	var IndexController = FishMVC.View.extend({
		init: function () {
            var self = this;
            this.doJiantou();
		},
		elements: {
            '.J_nextPage':'nextPage',
            '.J_part02_position':'part02Position',
            '#part02Zhizheng':'part02Zhizheng',
            '#part03Next':'part03Next',
            '#part03Car':'part03Car',
            '.part03-cart .img':'cartImg',
            '.part03-desc .img':'cartImgDesc',
            '.touchslider-item img':'touchsliderItemImg',
            '.part03Prev img':'part03Prev',
            '.part03Next img':'part03Next',
            '.partJiantou img':'partJiantou',
            '.part16-phone .part02-button':'part16PhoneButton',
            '.part16-car img':'part16Car',
            '.part16-people img':'part16People'
		},
		events: {
            'touchstart nextPage':'doNextPage',
            'touchstart part02Position':'doPart02Position',
            'touchstart part03Next':'doPart03Next',
            'touchstart part16PhoneButton':'doPart16PhoneButton'
		},

        doNextPage:function(target){
            var pageObj = target.parents('.page'),
                nexPageObj = pageObj.next();

            if(nexPageObj.hasClass('part03')){
                this['initPart03']();
            }

            if(nexPageObj && nexPageObj.length && nexPageObj[0].nodeName.toLocaleLowerCase()!=='script'){
                pageObj.hide();
                nexPageObj.show();
            }
        },

        doPart02Position:function(target){
            var c = target.data('xy'),
                self = this,
                translate = 'translate('+c[0]+'px,'+c[1]+'px)';
            this['part02Zhizheng'].css({'opacity':1,'-webkit-animation':'none'});
            setTimeout(function(){
                self['part02Zhizheng'].css('-webkit-transform',translate);
            },100)
        },

        doPart03Next:function(target){
            var nexObj = this['part03Car'].next(),
                nextClass = nexObj.attr('class');

            if(nextClass!=='img'){
                return false;
            }

            this['part03Car'].hide().removeAttr('id');
            nexObj.show().attr('id','part03Car');

        },

        initPart03:function(){
            this.touchsliderItemImg.show();

            $(".touchslider").touchSlider({/*options*/});

            this.doPart03Jiantou();
        },

        doPart03Jiantou:function(){
            var self = this;
            var i = 0;
            setInterval((function(){
                self['part03Prev'].css('opacity',0.5);
                self['part03Next'].css('opacity',0.5);
                self['part03Prev'].eq(i).css('opacity',1);
                self['part03Next'].eq(i).css('opacity',1);
                i++;

                if(i>2){
                    i=0;
                }
                console.log(i);

            }),300)
        },

        doJiantou:function(){
            var self = this;
            var i = 0;
            setInterval((function(){
                self['partJiantou'].css('opacity',0.5);
                self['partJiantou'].eq(i).css('opacity',1);
                i++;

                if(i>2){
                    i=0;
                }

            }),300)
        },

        doPart16PhoneButton:function(target){
            var temp = target.data('temp'),self = this;
            temp = temp.split(',');

            if(self.part16Car.hasClass(temp[0])){
                return false;
            }

            clearTimeout(part16Timeout);

            self.part16People.fadeIn('fast');

            self.part16Car.css('-webkit-transition','-webkit-transform 0s ease-out');


            self.part16Car.removeClass();

            part16Timeout = setTimeout(function(){
                self.part16Car.css('-webkit-transition','-webkit-transform '+temp[1]+'s ease-out');
            },200);

            part16Timeout = setTimeout(function(){
                self.part16Car[0].className = temp[0];

                part16Timeout = setTimeout(function(){
                    self.part16People.eq(temp[2]).fadeOut('slow');

                    self.part16Car.css('-webkit-transition','-webkit-transform '+3/Number(temp[1])+'s ease-in');

                    part16Timeout = setTimeout(function(){
                        self.part16Car[0].className = 'part16-car-end';

                        part16Timeout = setTimeout(function(){
                            self.part16People.eq(temp[2]).fadeIn('fast');
                            self.part16Car.removeClass().removeAttr('style');
                        },3/Number(temp[1])*1000);

                    },500);

                },Number(temp[1])*1000);

            },400);
        }

	});
	var indexController = new IndexController({el: $('.wrapper')});
});