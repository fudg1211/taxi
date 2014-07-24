requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: './js/',
	paths:{
		Fish:'./lib/Fish',
		json2:'./lib/json2',
        ejs:'./lib/ejs',
		common:'./global/common'
	},
	shim:{
		'common':{
			deps:['Fish', 'ejs', 'json2']
		}
	},
	urlArgs: 'v=0722221137'
});

// Start the main app logic.
requirejs(
	['./lib/Fish', './lib/ejs', './lib/json2','./global/global','./lib/slider'],
	function () {
		//jQuery, canvas and the app/sub module are all
		//loaded and can be used here now.
	}
);
