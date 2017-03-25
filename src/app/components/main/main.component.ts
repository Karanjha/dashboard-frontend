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
    'resizeable': true,
    'margins': [10, 10],
    'fix_to_grid': false
  }
  private defaults = {
    'twitter': {
      sizex: 1,
      sizey: 2,
      col: 1,
      row: 1,
      payload: 'twitter'
    },
    'selfData': {
      row: 2,
      sizex: 2,
      sizey: 2,
      col: 2,
      payload: 'selfData'
    }
  };

  private localStoreToWidgetName = {
    'Twitter-Feed': 'twitter',
    'Student-Details': 'selfData'
  }

  configurations: any = {
    'twitter': {
      display: true,
    },
    'selfData': {
      display: true,
    },
  }

  ngOnInit() {
    // Fetch cached configurations
    for(let key in this.configurations) {
      if (1 != 1 && localStorage.getItem(`${key}.config`)) {
        console.log('found some stuff in localstorage...');
        this.configurations[key].config =
          JSON.parse(localStorage.getItem(`${key}.config`));
      } else {
        console.log('logging defaults...');
        this.configurations[key].config = this.defaults[key]
      }
    }

    for(let key in this.localStoreToWidgetName) {
      if (localStorage.getItem(key) === 'false') {
        this.configurations[this.localStoreToWidgetName[key]]
          .display = false;
      }
    }
  }

  updateItem(evt: NgGridItemEvent): void {
    localStorage.setItem(`${evt.payload}.config`,
                         JSON.stringify(this.configurations[evt.payload].config));
    console.log(evt);
  }

  constructor(public authService: AuthService) {

  }

}
