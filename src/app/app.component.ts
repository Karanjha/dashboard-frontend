import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn: boolean = false;
  settings: boolean;

  tabLabels: string[] = ['Dashboard', 'Event', 'Share', 'Student Search'];

  currTab: string = 'Dashboard';

  tabs: {} = {
    'Dashboard' : {'state': true},
    'Event': {'state': false},
    'Share': {'state': false},
    'Student Search': {'state': false}
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn.subscribe((val) => {
      this.check(val);
    });
    if (!localStorage.getItem('login.first')) {
      this.settings = true;
    }
  }

  check(state) {
    this.loggedIn = state;
    this.tabs[this.currTab].state = state;
  }

  switchTab(tab: string) {
    if (this.currTab !== tab) {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
    }
  }

  showSettings(state) {
    this.settings = state;
    if (!state) {
      localStorage.setItem('login.first', 'done');
    }
  }

}
