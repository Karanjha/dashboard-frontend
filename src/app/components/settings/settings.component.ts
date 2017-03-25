import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  itemsLabel: string[] = ['Calendar', 'Student-Details', 'Twitter-Feed', 'Weather', 'Todo'];
  currItem: string = 'Calendar';
  items: {} = {
    'Calendar'        : {'state': true},
    'Student-Details' : {'state': false},
    'Twitter-Feed'    : {'state': false},
    'Weather'         : {'state': false},
    'Todo'            : {'state': false}
  };

  constructor() { }

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
