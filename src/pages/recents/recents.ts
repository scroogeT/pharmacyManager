import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { ReportsService } from '../../services/reports.service';

import {AboutPage} from '../about/about';
/**
 * Generated class for the RecentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recents',
  templateUrl: 'recents.html',
})
export class RecentsPage {
	DisasterItems: FirebaseListObservable<any[]>;

  hospList: {hospName: string}[]=[];

  constructor(public authData: AuthData,public firebaseProvider: FirebaseProvider,private reportsService: ReportsService,public navCtrl: NavController, public navParams: NavParams) {
    this.hospList = this.reportsService.getHospList();
  }

  ionViewWillEnter(){
    this.hospList = [];
    //this.recentItems = this.firebaseProvider.getShoppingItems();
    this.hospList = this.reportsService.getHospList();
  }

  goDetail(hospName:string){
    console.log("going to: ",hospName);
    //clear the details array and get new content
    this.firebaseProvider.getHospData(hospName);
    
    this.navCtrl.push(AboutPage,{hospName:hospName})

  }

  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
  }

  refresh(){
    //this.refresh();    //too much recursion
    this.navCtrl.push(AboutPage);

  }
  onInput($event){

  }

  onCancel($event){
  	
  }

}
