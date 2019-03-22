const regeneratorRuntime = require('../../js/regeneratorRuntime.js'),
      wxApp = require('../../js/wxApp'),
	  app = getApp();


wxApp.ready({
    data:{
	    taskName:"",
	    taskType:"",
	    taskPassword:"",
	    taskDate:''
    },
	onLoad:function(){
        this.init().then(rs=>{

        	console.log('page ok')
        }).catch(e=>{
			console.log(e);
        });
      // console.log(1233)
    },
	init:async function(){
		// let _this = this;
		// setInterval(function(){
		// 	console.log(JSON.stringify(_this.data))
		// },1000)
	},
	bindDateChange:function(e){
		console.log(e)
	}





});
