const regeneratorRuntime = require('../../js/regeneratorRuntime.js'),
      wxApp = require('../../js/wxApp'),
	  canvasChat = require('../../template/day'),
	  app = getApp();


wxApp.ready({
    data:{},
	onLoad:function(){
        this.init().then(rs=>{

        	console.log('page ok')
        }).catch(e=>{
			console.log(e);
        });
      // console.log(1233)
    },
	init:async function(){
		this.checkWxVer();

		//获取用户信息
		//未授权返回空对象
		let data = await wxApp.getUserInfo();
		console.log(data);


		canvasChat('canvas1',15);
		canvasChat('canvas2',45);
	},


	//检查是否支持云函数的微信版本
    checkWxVer:function(){
        if(!wx.cloud){
            wx.redirectTo({
                url: '../notSupport/notSupport',
            });
        }
    }
	// createCanvas:function(id,per){
    	// let windowWidth = wxApp.device().windowWidth,
	// 	    canvasCenter = parseInt(windowWidth*150/750)/2,
	// 	    endDeg = per*Math.PI*2/100-Math.PI/2,
	// 	    startDeg = 0-Math.PI/2;
	//
	//
	//
	// 	// 使用 wx.createContext 获取绘图上下文 context
	// 	const context = wx.createCanvasContext(id);
	//
	// 	context.beginPath();
	// 	context.setStrokeStyle('#d5d5d5');
	// 	context.setLineWidth(2);
	// 	context.arc(canvasCenter,canvasCenter,canvasCenter*0.9,0,2*Math.PI);
	// 	context.stroke();
	//
	// 	context.beginPath();
	// 	context.setLineWidth(2);
	// 	context.setStrokeStyle('#0000e8');
	// 	context.arc(canvasCenter,canvasCenter,canvasCenter*0.9,startDeg,endDeg);
	// 	context.stroke();
	//
	// 	context.beginPath();
	// 	context.setLineWidth(1);
	// 	context.font = 'bold 16px Arial';
	// 	context.textAlign = 'center';
	// 	context.textBaseline = 'middle';
	// 	context.fillStyle = '#666';
	// 	context.fillText(per+"%", canvasCenter, canvasCenter);
	// 	context.stroke();
	//
	// 	context.draw();
	//
	//
	// }


});

//
// Page({
//   data: {
//
//   },
//
//   onLoad: function() {
//
//
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//           wx.getUserInfo({
//             success: res => {
//               this.setData({
//                 avatarUrl: res.userInfo.avatarUrl,
//                 userInfo: res.userInfo
//               })
//             }
//           })
//         }
//       }
//     })
//   },
//
//   onGetUserInfo: function(e) {
//     console.log(e)
//     if (!this.logged && e.detail.userInfo) {
//       this.setData({
//         logged: true,
//         avatarUrl: e.detail.userInfo.avatarUrl,
//         userInfo: e.detail.userInfo
//       })
//     }
//   },
//
//   onGetOpenid: function() {
//     // 调用云函数
//     wx.cloud.callFunction({
//       name: 'login',
//       data: {},
//       success: res => {
//         console.log('[云函数] [login] user openid: ', res.result.openid)
//         app.globalData.openid = res.result.openid
//         wx.navigateTo({
//           url: '../userConsole/userConsole',
//         })
//       },
//       fail: err => {
//         console.error('[云函数] [login] 调用失败', err)
//         wx.navigateTo({
//           url: '../deployFunctions/deployFunctions',
//         })
//       }
//     })
//   },
//
//   // 上传图片
//   doUpload: function () {
//     // 选择图片
//     wx.chooseImage({
//       count: 1,
//       sizeType: ['compressed'],
//       sourceType: ['album', 'camera'],
//       success: function (res) {
//
//         wx.showLoading({
//           title: '上传中',
//         })
//
//         const filePath = res.tempFilePaths[0]
//
//         // 上传图片
//         const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
//         wx.cloud.uploadFile({
//           cloudPath,
//           filePath,
//           success: res => {
//             console.log('[上传文件] 成功：', res)
//
//             app.globalData.fileID = res.fileID
//             app.globalData.cloudPath = cloudPath
//             app.globalData.imagePath = filePath
//
//             wx.navigateTo({
//               url: '../storageConsole/storageConsole'
//             })
//           },
//           fail: e => {
//             console.error('[上传文件] 失败：', e)
//             wx.showToast({
//               icon: 'none',
//               title: '上传失败',
//             })
//           },
//           complete: () => {
//             wx.hideLoading()
//           }
//         })
//
//       },
//       fail: e => {
//         console.error(e)
//       }
//     })
//   },
//
// })
