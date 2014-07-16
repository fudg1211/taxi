/**
 * Created with IntelliJ IDEA.
 * User: fudongguang
 * Date: 13-10-9
 * Time: AM10:48
 * To change this template use File | Settings | File Templates.
 */
define(['./global/global','./data/data'], function (g,data) {
    var part16Timeout;

	var IndexController = FishMVC.View.extend({
		init: function () {
            var self = this;
            this.doJiantou();

            this.initPartx();
            this.initTouch();

            this['initPart03']();

        },

        initTouch: function () {
            var y = 0,
                x = 0,
                minDistance = 30,
                isStart = false,
                bodyHeight = $('body').height(),
                canMoveNext = false,
                canMovePrev =false,
                direction,
                nexPageObj,
                prevPageObj,
                currentShow,
                isEnd = true;
            $('body').on('touchstart', function (event) {
                if(!isEnd){
                    return false;
                }

                isStart = false;
                canMoveNext = false;
                canMovePrev = false;
                direction = false;
                y = event.originalEvent.pageY;
                x = event.originalEvent.pageX;

                currentShow = $('#currentShow');

                if (currentShow.hasClass('J_touch')) {
                    nexPageObj = currentShow.next();
                    canMoveNext = true;
                }

                prevPageObj = currentShow.prev();
                if (prevPageObj && prevPageObj.length && prevPageObj.hasClass('page')) {
                    canMovePrev = true;
                }

                event.preventDefault();
            }).on('touchend', function (event) {
                var self = this;
                event.preventDefault();

                if(isStart && direction){
                    setTimeout(function(){
                        currentShow.hide().css('z-index',0).removeAttr('id');
                        isEnd = true;
                    },500);
                }


                    if (isStart && direction=='up'){

                        nexPageObj.animate({top:0},'fast').attr('id','currentShow');
                    }

                if(isStart && direction=='down'){
                    prevPageObj.animate({top:0},'fast').attr('id','currentShow');
                }

            }).on('touchmove', function (event) {
                var tempY = event.originalEvent.pageY,
                    tempX = event.originalEvent.pageX,
                    distanceY = tempY - y,
                    distanceX = tempX - x;


                if (Math.abs(distanceY) > minDistance && (isStart || Math.abs(distanceY) > Math.abs(distanceX))) {
console.log(isStart);
console.log(distanceY);
console.log('Next'+canMoveNext.toString());
console.log('prev'+canMovePrev.toString());
                    if(!isStart && distanceY<0 && canMoveNext){
                        prevPageObj.add(currentShow).css({'z-index':0});
                        nexPageObj.show().css({'z-index':10});
                    }

                    if(!isStart && distanceY>=0 && canMovePrev){
                        prevPageObj.show().css({'z-index':10});
                        nexPageObj.add(currentShow).css({'z-index':0});
                    }

                    isStart = true;
                    isEnd = false;

                    if (distanceY < 0) {
                        if (canMoveNext) {
                            direction = 'up';
                            nexPageObj.show().css('top', bodyHeight+distanceY)
                        }
                    } else {
                        if(canMovePrev){
                            direction = 'down';
                            prevPageObj.css({'top':distanceY-bodyHeight});
                        }
                    }
                }


                event.preventDefault();

            });
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

            '.partJiantou':'partJiantou',


            '.part16-phone .part02-button':'part16PhoneButton',
            '.part16-car img':'part16Car',
            '.part16-people img':'part16People',


            '#J_part02_position':'J_part02_position_rel',
            '.touchslider-nav-item-current':'touchslider-nav-item-current_rel',


            '#part15Left':'part15Left',
            '#part15Right':'part15Right',
            '#part15FeijiLeft':'part15FeijiLeft',
            '#part15FeijiRight':'part15FeijiRight',
            '.part15-feiji':'part15Feiji'
		},
		events: {
            'click nextPage':'doNextPage',
            'click part02Position':'doPart02Position',
            'click part03Next':'doPart03Next',
            'click part16PhoneButton':'doPart16PhoneButton',
            'click part15Left':'doPart15Left',
            'click part15Right':'doPart15Right'
		},

        doNextPage:function(target){
            var pageObj = target.parents('.page'),
                nexPageObj = pageObj.next();

            if(nexPageObj && nexPageObj.length && nexPageObj.hasClass('partx')){
                this['initPartx']();
            }

            if(nexPageObj && nexPageObj.length && nexPageObj[0].nodeName.toLocaleLowerCase()!=='script'){
                pageObj.prev().hide();
                pageObj.hide();
                $('#currentShow').removeAttr('id');
                nexPageObj.show().attr('id','currentShow');
            }
        },

        doPart02Position:function(target){
            var c = target.data('xy'),
                self = this,
                translate = 'translate('+c[0]+'px,'+c[1]+'px)';
            this['J_part02_position_rel']().removeAttr('id');
            target.attr('id','J_part02_position');
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

        initPartx:function(){
            var from = this['J_part02_position_rel']().attr('title') || '东直门',
                car = this['touchslider-nav-item-current_rel']().attr('title') || '特拉斯';

            var tempData = data.getPrice(from,car),
                html = new EJS({element:"parxTpl"}).render({data:tempData});


            $('#partx-phone').html(html);
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

            }),300)
        },

        doJiantou:function(){
            var self = this,i = 0,img;
            setInterval((function(){
                self['partJiantou'].each(function(k,v){
                    img = $(v).children('img');
                    img.css('opacity',0.5);
                    img.eq(i).css('opacity',1);
                });

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
        },

        doPart15Left:function(){
            var self = this;
            this['part15Feiji'].css('opacity',0);
            this['part15FeijiLeft'].css('-webkit-transition','-webkit-transform 0s linear');
            this['part15FeijiLeft'].css('-webkit-transform','translate(-100px,0)');
            setTimeout(function(){
                self['part15FeijiLeft'].css('opacity',1);
                self['part15FeijiLeft'].css('-webkit-transition','-webkit-transform 2s linear');
                self['part15FeijiLeft'].css('-webkit-transform','translate(1160px,0)');
            },200)
        },

        doPart15Right:function(){
            var self = this;
            this['part15Feiji'].css('opacity',0);
            this['part15FeijiRight'].css('-webkit-transition','-webkit-transform 0s linear');
            this['part15FeijiRight'].css('-webkit-transform','translate(100px,0)');
            setTimeout(function(){
                self['part15FeijiRight'].css('opacity',1);
                self['part15FeijiRight'].css('-webkit-transition','-webkit-transform 2s linear');
                self['part15FeijiRight'].css('-webkit-transform','translate(-1160px,0)');
            },200)
        }

	});
	var indexController = new IndexController({el: $('.wrapper')});
});