
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // maintains checkbox state
  itemsLabel: Object = {
    'Calendar': false,
    'Student-Details': false,
    'Twitter-Feed': false,
    'Weather': false,
    'Todo': false
  };
  itemsLabelKeys = Array.from(Object.keys(this.itemsLabel));

  currItem: string = 'Calendar';

  // maintains sidebar tab state
  items: {} = {
    'Calendar'        : {'state': true},
    'Student-Details' : {'state': false},
    'Twitter-Feed'    : {'state': false},
    'Weather'         : {'state': false},
    'Todo'            : {'state': false}
  };

  constructor() {
    for (let key in this.itemsLabel) {
      if (localStorage.getItem(key) === 'true') {
        this.itemsLabel[key] = true;
      } else {
        this.itemsLabel[key] = false;
      }
    }
  }

  state(widget) {
    console.log(widget);
    if (widget.checked) {
      localStorage.setItem(widget.source.id, widget.checked);
    } else {
      localStorage.removeItem(widget.source.id);
    }
  }

  change(item: string) {
    if (this.currItem !== item) {
      this.items[this.currItem].state = false;
      this.items[item].state = true;
      this.currItem = item;
    }
  }



  ngOnInit() {
  }

}
