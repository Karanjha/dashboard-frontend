import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  date: Date;
  loading: boolean;

  constructor(private dialogRef: MdDialogRef<EventDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private eventService: EventService
             ) {
    this.date = this.data.date;
  }

  post(description: string, start: Date, end: Date) {
    this.loading = true;
    this.eventService.add(description, new Date(start), new Date(end))
      .then(res => {
        console.log(res.statusText);
        this.dialogRef.close();
      });
  }

  ngOnInit() {
  }

}
