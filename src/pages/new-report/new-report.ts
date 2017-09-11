import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReportsService } from '../../services/reports.service';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-new-report',
  templateUrl: 'new-report.html',
})
export class NewReportPage {
  constructor(private reportsService: ReportsService, public firebaseProvider: FirebaseProvider , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewReportPage');
  }

  uploadReport(value:{needles_21G_23G:string,Adrenaline_inj:string,Amoxilicillin_tablets:string,Aspirin:string,BP_machines:string,
                      Benzathine_inj:string,Benzyl_penicillin_5ml:string,Betadine:string,CPZ_100mg:string,CPZ_inj:string,
                      Calcium_gluconate:string,Cannulas:string,Cord_clamps:string,Cotton_wool_500g:string,Crepe_bandages:string,
                      Diazepam_inj:string,Diclofenac_25ml_inj:string,Doxycycline_100mg:string,Erythromycin_250mg:string,
                      FD:string,Fefo:string,Foleys_catheter:string,Frusemide_40mg:string,G_and_I:string,Gentamycin_40mg:string,
                      Glibenclamide_5mg:string,Glucometers:string,HCT_25mg:string,Haemoglobin_machine:string,Haloperidol:string,
                      Hydralazine:string,Ibuprofen_400mg:string,Latex_gloves:string,MMT:string,Magnesium_Sulphate_inj:string,
                      Metformin_500mg:string,Metronidazole_400mg:string,Nifedipine_20mg:string,Normal_saline:string,Nu_gauze_swabs:string,
                      Oxytocin_inj:string,Paracetamol_tablets_500mg_and_100mg:string,Phenorbitone:string,Ringers_Lactate:string,
                      Spirit:string,Sutures_2_chromic_RC_RB_and_1_nylon:string,Syringes_2ml_and_5ml:string,TEO:string,
                      Thermometers:string,Urine_bags:string,Vitamin_K_inj:string,date:Date,facility:string,
                      glucostrips:string,urine_Analysis_Strips:string,zinc_oxide_strapping:string }){
  	//extend the form fields to include user email & other info like timestamp
    //console.log(value);
    //this.reportsService.kandaReport(value);
    this.firebaseProvider.addItem(value);
    //this.firebaseProvider.
  	this.navCtrl.pop();
  }

}
