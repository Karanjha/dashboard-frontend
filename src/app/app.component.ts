import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn: boolean = false;

  tabLabels: string[] = ['Main', 'Event'];

  currTab: string = 'Main';

  tabs: {} = {
    'Main' : {'state': false},
    'Event': {'state': false}
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
     this.authService.isLoggedIn()
      .then((loggedIn) => {
        console.log(`Logged In in AppComponent ${loggedIn}`);
        if (loggedIn) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
  }

  check(state) {
    this.loggedIn = state;
    this.tabs[this.currTab].state = true;
  }

  switchTab(tab: string) {
    if (this.currTab === tab) {
      console.log('Try out something different');
    } else {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
      console.log(tab);
    }
  }

}
