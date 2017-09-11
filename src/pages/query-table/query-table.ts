import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the QueryTablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-query-table',
  templateUrl: 'query-table.html',
})
export class QueryTablePage {
	recentItems: FirebaseListObservable<any[]>;

  constructor(public firebaseProvider: FirebaseProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.recentItems = this.firebaseProvider.getShoppingItems();
  }

  onInput($event){

  }

  onCancel($event){
  	
  }


}
