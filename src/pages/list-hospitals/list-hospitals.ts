import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { ReportsService } from '../../services/reports.service';

import {HospitalDetailPage} from '../hospital-detail/hospital-detail'
/**
 * Generated class for the ListHospitalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-hospitals',
  templateUrl: 'list-hospitals.html',
})
export class ListHospitalsPage {
	hospitals: FirebaseListObservable<any[]>;

  hospList: {hospName: string}[]=[];

  constructor(public authData: AuthData,public firebaseProvider: FirebaseProvider,private reportsService: ReportsService,public navCtrl: NavController, public navParams: NavParams) {
        this.hospitals = this.firebaseProvider.getHospitals();
  }

  ionViewWillEnter(){
    this.hospList = [];
    //console.log(this.reportsService.getHospList())
    this.hospList = this.reportsService.getHospList();
  }

  goDetail(hospName:string){
    console.log("going to: ",hospName);
    //clear the details array and get new content
    this.firebaseProvider.getHospData(hospName);
    
  	this.navCtrl.push(HospitalDetailPage,{hospName:hospName})

  }

  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
  }

  refresh(){
    //this.refresh();    //too much recursion
    this.navCtrl.push(HospitalDetailPage);

  }

  searchItems($event){
    console.log($event);
    alert("sorry, \n Search is disabled to save data");
  }

}
