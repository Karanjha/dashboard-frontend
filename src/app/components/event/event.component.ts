import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  openDialog(date?: moment.Moment) {
    if (date) {
      prompt('New Event on: ' + date.format());
    } else {
      prompt('Enter new Event');
    }
  }

  calendarOptions: Object = {
    height: 'auto',
    // defaultView: 'basicDay',
    fixedWeekCount : false,
    eventLimit: true, // allow "more" link when too many events
    dayClick: (date, jsEvent, view) => {
      this.openDialog(date);
    },
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };
  constructor() { }
  ngOnInit() {}

}
