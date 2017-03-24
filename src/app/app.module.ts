import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth';
import { MainComponent } from './components/main';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { EventComponent } from './components/event/event.component';

import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { HttpWrapperService } from './services/http-wrapper.service';

import { EventDialogComponent } from './components/event/event-dialog/event-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    CalendarComponent,
    EventComponent,
    EventDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    HttpWrapperService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ EventDialogComponent ]
})
export class AppModule { }
