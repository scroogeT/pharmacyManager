import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController,ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { Login } from '../login/login';

import {NewReportPage} from '../new-report/new-report'
import { ReportsService } from '../../services/reports.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //shoppingItems: FirebaseListObservable<any[]>;

	//reports: {facility: string,date:Date,consent:Boolean }[] = []; 

    constructor(public modalCtrl: ModalController,private reportsService: ReportsService, public firebaseProvider: FirebaseProvider, public navCtrl: NavController, public authData: AuthData) {

  }

  ionViewWillEnter(){
  	//this.reports = this.reportsService.toraReport();
    //this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }


  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
  }
  addReport(){
  	this.navCtrl.push(NewReportPage)
    //console.log(this.authData.getUserEmail());
  }

  disasterReport(value:{facility:string,date:Date,Description:Text}){
    //console.log(value);
    this.firebaseProvider.addDisasterReport(value);
    this.navCtrl.push(NewReportPage);
  }

  openModal(characterNum) {

      let modal = this.modalCtrl.create(ModalContentPage, characterNum);
      modal.present();
    }
  }

  @Component({
    template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Description
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
        <ion-item>
          <ion-avatar item-start>
            <img src="{{character.image}}">
          </ion-avatar>
          <h2>{{character.name}}</h2>
          <p>{{character.quote}}</p>
        </ion-item>

        <ion-item *ngFor="let item of character['items']">
          {{item.title}}
          <ion-note item-end>
            {{item.note}}
          </ion-note>
        </ion-item>
    </ion-list>
  </ion-content>
  `
  })
  export class ModalContentPage {
    character;

    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
    ) {
      var characters = [
        {
          name: 'Gollum',
          quote: 'Sneaky little hobbitses!',
          image: 'assets/img/avatar-gollum.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'River Folk' },
            { title: 'Alter Ego', note: 'Smeagol' }
          ]
        },
        {
          name: 'Frodo',
          quote: 'Go back, Sam! I\'m going to Mordor alone!',
          image: 'assets/img/avatar-frodo.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'Shire Folk' },
            { title: 'Weapon', note: 'Sting' }
          ]
        },
        {
          name: 'Samwise Gamgee',
          quote: 'What we need is a few good taters.',
          image: 'assets/img/avatar-samwise.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'Shire Folk' },
            { title: 'Nickname', note: 'Sam' }
          ]
        }
      ];
      this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }
  }
  