const regeneratorRuntime = require('../../js/regeneratorRuntime.js'),
      wxApp = require('../../js/wxApp'),
	  app = getApp(),
	  WxParse = require('../../js/wxParse/wxParse.js');

let richText = '<p>欢迎使用<b>wangEditor 富文本编辑器</b>，请输入内容...</p><p><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554801562695&di=32cfebb90e432ca6aad0312fbf594b1c&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg" style="max-width:100%;"><br></p><p>阿斯顿飞机卡洛斯地方阿迪放假啊</p><h1>阿迪是否看见啊<span style="font-size: x-large; font-weight: bold; background-color: rgb(139, 170, 74); color: rgb(194, 79, 74);">善良的咖</span>啡机阿迪是否</h1>';

wxApp.ready({
	data: {

	},
	onLoad:function(e){
    	console.log(e)
        this.init().then(rs=>{

        	console.log('page ok')
        }).catch(e=>{
			console.log(e);
        });
      // console.log(1233)
    },
	init:async function(){
		WxParse.wxParse('content', 'html', richText, this, 25);
	}


});
