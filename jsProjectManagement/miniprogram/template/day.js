
let wxApp = require('../js/wxApp.js');

module.exports = function(id,per){
	let windowWidth = wxApp.device().windowWidth,
		canvasCenter = parseInt(windowWidth*150/750)/2,
		endDeg = per*Math.PI*2/100-Math.PI/2,
		startDeg = 0-Math.PI/2;



	// 使用 wx.createContext 获取绘图上下文 context
	const context = wx.createCanvasContext(id);

	context.beginPath();
	context.setStrokeStyle('#d5d5d5');
	context.setLineWidth(2);
	context.arc(canvasCenter,canvasCenter,canvasCenter*0.9,0,2*Math.PI);
	context.stroke();

	context.beginPath();
	context.setLineWidth(2);
	context.setStrokeStyle('#0000e8');
	context.arc(canvasCenter,canvasCenter,canvasCenter*0.9,startDeg,endDeg);
	context.stroke();

	context.beginPath();
	context.setLineWidth(1);
	context.font = 'bold 16px Arial';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.fillStyle = '#666';
	context.fillText(per+"%", canvasCenter, canvasCenter);
	context.stroke();

	context.draw();


};