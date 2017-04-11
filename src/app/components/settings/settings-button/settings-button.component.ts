import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.css']
})
export class SettingsButtonComponent implements OnInit {

  @Output() settings: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() state: boolean;

  constructor() { }

  ngOnInit() {
  }

  show() {
      this.settings.emit(!this.state);
  }


}
