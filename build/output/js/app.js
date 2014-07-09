requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: './js/',
	paths:{
		Fish:'./lib/Fish',
		json2:'./lib/json2',
		common:'./global/common'
	},
	shim:{
		'common':{
			deps:['Fish', 'ejs', 'json2']
		}
	},
	urlArgs: 'v=0709235454'
});

// Start the main app logic.
requirejs(
	['./lib/Fish', './lib/json2','./global/global','./lib/slider'],
	function () {
		//jQuery, canvas and the app/sub module are all
		//loaded and can be used here now.
	}
);
