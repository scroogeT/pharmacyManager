import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ListHospitalsPage} from '../list-hospitals/list-hospitals';
import {HospitalDetailPage} from '../hospital-detail/hospital-detail'
import {RecentsPage} from '../recents/recents';
import {QueryTablePage} from '../query-table/query-table';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecentsPage;
  tab2Root = ListHospitalsPage;
  tab3Root = QueryTablePage;

  constructor() {

  }
}
