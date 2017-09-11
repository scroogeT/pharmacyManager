import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import{AboutPage} from '../about/about'

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { ReportsService } from '../../services/reports.service';



/**
 * Generated class for the HospitalDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hospital-detail',
  templateUrl: 'hospital-detail.html',
})
export class HospitalDetailPage {

  hospitalItems: FirebaseListObservable<any[]>;
	itemList: {itemName: string}[]=[];

  constructor(public firebaseProvider: FirebaseProvider,private reportsService: ReportsService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
  		//this.itemList = this.reportsService.getItemList();
      this.hospitalItems = this.firebaseProvider.getHospData(this.navParams.get('hospName'))
  		//console.log(this.reportsService.getItemList());
      console.log(this.navParams.get('hospName'));
  }

  itemDetail(item:string){
  		console.log("finding details for: ",item);
      //this.navCtrl.push(AboutPage);
  }

  drugFilter(status){
    
  }

}
