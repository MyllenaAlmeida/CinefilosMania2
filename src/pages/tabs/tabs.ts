import { Component } from '@angular/core';


import { FeedPage } from '../feed/feed';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = ListPage;
  tab3Root = ProfilePage;


  constructor() {

  }
}
