import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { ReportsService } from '../../services/reports.service';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase,private reportsService: ReportsService) { }
 
  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }
 
 //automatically fetch user email & tag each submission with who submitted
 //add item under the facility directory
  addItem(name) {

    //var user = firebase.auth().currentUser;    
    //check to see if the person is logged in !!!!!
    /*
      if(user){
      var mail, bundle ;
      mail = user.email;
      bundle ={
        'userMail':mail,
        'facility':name.facility,
        'date':name.date,
        'consent':name.consent
      }
      
    }
    */
    console.log("curr bundle\n ",name);
    this.afd.list('/hospitals/'+name.facility+'/').push(name);
    alert("Report submitted sucessfully !!");
    
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }

  getHospitals(){
      //firebase.
      //this.reportsService.addHosp("ma1");

      //clear the array first
      this.reportsService.refreshHosp();

      this.afd.list('/hospitals/',{preserveSnapshot:true}).subscribe(snapshots=>{
          snapshots.forEach(snapshot=>{
            console.log(snapshot.key)
            this.reportsService.addHosp(snapshot.key);
            //console.log(snapshot)
          });
        })

      return this.afd.list('/hospitals/',{ preserveSnapshot: true });
  }

  getHospData(hospName){
    
      this.afd.list('/hospitals/'+hospName+"/",{preserveSnapshot:true}).subscribe(snapshots=>{
          snapshots.forEach(snapshot=>{
            //console.log(snapshot.key)
            this.reportsService.addItem(snapshot.key);
            //console.log(snapshot)
          });
        })
      console.log(this.afd.list('/hospitals/'+hospName+'/',{
        query:{
          //orderByChild: 
          limitToLast:1,
          //equalTo:'Unavailable'
        }
      }));

      return this.afd.list('/hospitals/'+hospName+'/',{
        query:{
          //orderByChild: 
          limitToLast:2,
          //equalTo:'Unavailable'
        }
      });
  }

  addDisasterReport(disaster){
    var user = firebase.auth().currentUser;
    var email=user.email;
    var bundle = {  userMail:email,
                    date:disaster.date,
                    Description:disaster.Description
                 };
    console.log(bundle);
    this.afd.list('/hospitals/'+disaster.facility+'/Disaster').push(bundle);
    alert("thank you, \n Distaster report has been submitted !! \n please fill in the state of medicines");
  }

  getDisasterReports(hospName){
    //query disaster reports based by the hospital
    return this.afd.list('/hospitals/'+hospName+'/Disaster/');
  }

  getHospFilter(status){
    //Todo here
  }

}