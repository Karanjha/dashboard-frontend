import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';
import { MdDialog } from '@angular/material';

import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

import { EventDialogComponent } from './event-dialog/event-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  openDialog(date?: moment.Moment) {
    return this.dialog.open(EventDialogComponent, {
      data: {
        date: date
      }
    });
  }

  calendarOptions: Object = {
    height: 'auto',
    fixedWeekCount : false,
    timezone: 'local',
    eventLimit: true, // allow "more" link when too many events
    dayClick: (date, jsEvent, view) => {
      const dialog = this.openDialog(date);
      dialog.afterClosed().subscribe((res) => {
        $('angular2-fullcalendar').fullCalendar('refetchEvents');
      });
    },
    eventSources: [
      {
        url: 'https://dashboard.pclub.in/api/timetable/get',
        headers: {
          'X-Username-Header': localStorage.getItem('username'),
          'X-Timestamp-Header': localStorage.getItem('timestamp'),
          'X-Auth-Header': localStorage.getItem('auth')
        },
        type: 'GET'
      }
    ]
  };
  constructor(private dialog: MdDialog) { }
  ngOnInit() {}

}
