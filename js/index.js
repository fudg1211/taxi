/**
 * Created with IntelliJ IDEA.
 * User: fudongguang
 * Date: 13-10-9
 * Time: AM10:48
 * To change this template use File | Settings | File Templates.
 */
define(['./global/global'], function (g) {
	var IndexController = FishMVC.View.extend({
		init: function () {

		},
		elements: {
            '.J_nextPage':'nextPage',
            '.J_part02_position':'part02Position',
            '#part02Zhizheng':'part02Zhizheng',
            '#part03Prev':'part03Prev',
            '#part03Next':'part03Next',
            '#part03Car':'part03Car',
            '.part03-cart .img':'cartImg',
            '.part03-desc .img':'cartImgDesc'
		},
		events: {
            'click nextPage':'doNextPage',
            'click part02Position':'doPart02Position',
            'click part03Next':'doPart03Next'
		},

        doNextPage:function(target){
            var pageObj = target.parents('.page'),
                nexPageObj = pageObj.next();

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

        }
	});
	var indexController = new IndexController({el: $('.wrapper')});
});