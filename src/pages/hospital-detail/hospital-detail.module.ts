import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HospitalDetailPage } from './hospital-detail';

@NgModule({
  declarations: [
    HospitalDetailPage,
  ],
  exports: [
    HospitalDetailPage
  ]
})
export class HospitalDetailPageModule {}
