import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn: boolean = false;

  tabLabels: string[] = ['Introduction', 'Event', 'Share', 'Student Search'];

  currTab: string = 'Introduction';

  tabs: {} = {
    'Introduction' : {'state': true},
    'Event': {'state': false},
    'Share': {'state': false},
    'Student Search': {'state': false}
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn.subscribe((val) => {
      this.check(val);
    });
  }

  check(state) {
    this.loggedIn = state;
    this.tabs[this.currTab].state = true;
  }

  switchTab(tab: string) {
    if (this.currTab !== tab) {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
    }
  }

}
