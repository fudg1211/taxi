requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: './js/',
	paths:{
		Fish:'./lib/Fish',
		ejs:'./lib/ejs_production',
		json2:'./lib/ejs_production',
		common:'./global/common'
	},
	shim:{
		'common':{
			deps:['Fish', 'ejs', 'json2']
		}
	},
	urlArgs: 'v=0706120254'
});

// Start the main app logic.
requirejs(
	['./lib/Fish','./lib/ejs_production', './lib/ejs_production','./global/global'],
	function () {
		//jQuery, canvas and the app/sub module are all
		//loaded and can be used here now.
	}
);
