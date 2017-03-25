import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  globalConfig = {
    'draggable': false,
    'resizeable': false,
    'margins': [5, 5],
    'fix_to_grid': true
  }

  private localStoreToWidgetName = {
    'Twitter-Feed': 'twitter',
    'Student-Details': 'selfData',
    'Calendar' : 'calenData',
    'Weather': 'weather'
  };

  configurations: any = {
    'twitter': {
      display: false
    },
    'selfData': {
      display: false
    },
    'calenData': {
      display: false
    },
    'weather': {
      display: false
    }
  };

  ngOnInit() {
    // Fetch cached configurations
    for (let key in this.localStoreToWidgetName) {
      if (localStorage.getItem(key)) {
        this.configurations[this.localStoreToWidgetName[key]]
            .display = true;
      }
    }
  }

  constructor(public authService: AuthService) { }

}
