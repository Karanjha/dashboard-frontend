import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  date: Date;
  constructor(private dialogRef: MdDialogRef<EventDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
             ) {
    this.date = this.data.date;
  }

  ngOnInit() {
  }

}
