export class ReportsService {
	private reports: {facility: string,date:Date,consent:Boolean }[] = [];

	private hospList: {hospName: string}[]=[];

	public itemList: {itemName: string}[]=[];

	kandaReport(report:{facility: string,date:Date,consent:Boolean }){
		this.reports.push(report);
	}

	toraReport(){
		return this.reports.slice();
	}

	addHosp(hospital:{hospName:string}){
		this.hospList.push(hospital)
		//console.log(this.hospList)
	}

	getHospList(){
		return this.hospList.slice();
	}

	addItem(item:{itemName:string}){
		//console.log("adding: ",item);
		this.itemList.push(item);
	}

	getItemList(){
		return this.itemList.slice();
	}

	refreshHosp(){
		this.hospList =[];
	}
}