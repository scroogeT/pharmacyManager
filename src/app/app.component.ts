import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor( public platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen) {
      
      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyCUEZslCxl1GAseiydL2vclGTNvNGWiaPQ",
          authDomain: "pharmacy-manager.firebaseapp.com",
          databaseURL: "https://pharmacy-manager.firebaseio.com",
          projectId: "pharmacy-manager",
          storageBucket: "",
          messagingSenderId: "129907436855"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {

          if (!user) {
              console.log("not login");
              this.rootPage = Login;
          } else {
            var currentEmail = user.email;
            var admins = [  'melonsw@gmail.com',
                            'takudzwamulema30@gmail.com',
                            'asheruva@gmail.com',
                            'fmsamanga@gmail.com',
                            'prisjakachira@gmail.com',
                            'nyashateemudzonga@gmail.com',
                            'maria.mvere@gmail.com'];
            var isAdmin = false;
            for (var i = admins.length - 1; i >= 0; i--) {
                if (currentEmail == admins[i]) { isAdmin = true; }
            }
              if(!isAdmin){
                   console.log("not admin: "+currentEmail+"");
                  this.rootPage = HomePage;
              }else{
                  console.log("login as admin: "+currentEmail+"");
                  this.rootPage = TabsPage;
              }
          }
      });
  }
}
