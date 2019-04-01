


module.exports = {
	create(year,month){
		let dayNumber = this.getMonthDayNumber(year,month),
			date = year+'-'+month+'-'+'01',
			weekNumber = new Date(date).getDay(),
			backData = new Array(weekNumber);

		console.log(dayNumber,date,weekNumber)
		for(let i=0,l=dayNumber;i<l;i++){
			backData.push(i+1);
		}

		return backData;
	},

	//获取月份的天数
	getMonthDayNumber(year,month){
		let day = 0;
		switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				day = 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				day = 30;
				break;
			case 2:
				if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
					day = 29;
				}else{
					day = 28;
				}
				break;
			default:
				day = 31;
		}

		return day;
	}

};