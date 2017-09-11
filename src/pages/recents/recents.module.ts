import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RecentsPage } from './recents';

@NgModule({
  declarations: [
    RecentsPage,
  ],
  exports: [
    RecentsPage
  ]
})
export class RecentsPageModule {}
