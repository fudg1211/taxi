/**
 * Created with IntelliJ IDEA.
 * User: fudongguang
 * Date: 13-10-9
 * Time: AM10:48
 * To change this template use File | Settings | File Templates.
 */
define(['./global/global', './data/data'], function (g, data, Validator) {
	var IndexController = FishMVC.View.extend({
		init: function () {

		},
		elements: {
            '.J_nextPage':'nextPage',
            '.J_part02_position':'part02Position',
            '#part02Zhizheng':'part02Zhizheng'
		},
		events: {
            'click nextPage':'doNextPage',
            'click part02Position':'doPart02Position'
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
                translate = 'translate('+c[0]+'px,'+c[1]+'px)';
            this['part02Zhizheng'].css('-webkit-animation','zhizheng 2.5s ease 0s 1 normal');
            this['part02Zhizheng'].css('-webkit-transform',translate);
        }
	});
	var indexController = new IndexController({el: $('.wrapper')});
});