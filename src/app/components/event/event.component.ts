import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';
import { MdDialog } from '@angular/material';

import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { HttpWrapperService } from '../../services/http-wrapper.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  @Input() view: string;

  openDialog(date?: moment.Moment) {
    return this.dialog.open(EventDialogComponent, {
      data: {
        date: date
      }
    });
  }

  calendarOptions: any = {
    height: 'auto',
    fixedWeekCount : false,
    defaultView: "month",
    timezone: 'local',
    eventLimit: true, // allow "more" link when too many events
    dayClick: (date, jsEvent, view) => {
      const dialog = this.openDialog(date);
      dialog.afterClosed().subscribe((res) => {
        $('angular2-fullcalendar').fullCalendar('refetchEvents');
      });
    },
    events: (start, end, timezone, callback) => {

      this.http.get(`https://dashboard.pclub.in/api/timetable/get?start=${start.format()}&end=${end.format()}`)
                    .subscribe((res) => {
                      localStorage.setItem(`${start.format()}-${end.format()}`, JSON.stringify(res.json()));
                      callback(res.json());
                    }, (err) => {
                      console.log("Error encounter");
                      if (localStorage.getItem(`${start.format()}-${end.format()}`)) {
                        callback(JSON.parse(localStorage.getItem(`${start.format()}-${end.format()}`)));
                      }
                    });
      }
  };

  constructor(private dialog: MdDialog,
              private http: HttpWrapperService) {

  }

    ngOnInit() {
      if (this.view !== null) {
        this.calendarOptions.defaultView = this.view;
        console.log(this.view);
      }
    }

}
