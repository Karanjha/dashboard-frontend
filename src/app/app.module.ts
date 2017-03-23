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

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    CalendarComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
