import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListHospitalsPage } from './list-hospitals';

@NgModule({
  declarations: [
    ListHospitalsPage,
  ],
  exports: [
    ListHospitalsPage
  ]
})
export class ListHospitalsPageModule {}
