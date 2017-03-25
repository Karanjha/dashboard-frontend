import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.css']
})
export class SettingsButtonComponent implements OnInit {

  @Output() settings: EventEmitter<boolean> = new EventEmitter<boolean>();
  state: boolean = false;

  constructor() { }

  ngOnInit() {
  }

    show() {
      if (!this.state) {
        this.settings.emit(true);
        this.state = true;
      } else {
        this.settings.emit(false);
        this.state = false;
      }
  }


}
