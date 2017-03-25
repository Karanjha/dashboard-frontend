import { Component, OnInit } from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';

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
  private defaults = {
    'twitter': {
      sizex: 2,
      sizey: 2,
      col: 1,
      row: 1,
      payload: 'twitter'
    },
    'selfData': {
      row: 2,
      sizex: 2,
      sizey: 2,
      col: 3,
      payload: 'selfData'
    }
  };

  private localStoreToWidgetName = {
    'Twitter-Feed': 'twitter',
    'Student-Details': 'selfData'
  }

  configurations: any = {
    'twitter': {
      display: false,
      config: this.defaults['twitter']
    },
    'selfData': {
      display: false,
      config: this.defaults['selfData']
    },
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

/*
 updateItem(evt: NgGridItemEvent): void {
  localStorage.setItem(`${evt.payload}.config`,
    JSON.stringify(this.configurations[evt.payload].config));
    console.log(evt);
    }
*/
  constructor(public authService: AuthService) {

  }

}
