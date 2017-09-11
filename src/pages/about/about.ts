import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	disasterItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,public firebaseProvider: FirebaseProvider, public navParams: NavParams) {

  }

  ionViewWillEnter(){
  		//this.itemList = this.reportsService.getItemList();
      this.disasterItems = this.firebaseProvider.getDisasterReports(this.navParams.get('hospName'))
  		//console.log(this.reportsService.getItemList());
      console.log(this.navParams.get('hospName'));
  }

}
