import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth';
import { AutoComponent } from './components/auto';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { EventComponent } from './components/event/event.component';
import { EventDialogComponent } from './components/event/event-dialog/event-dialog.component';
import { MainComponent } from './components/main';
import { PostComponent } from './components/post/post.component';

import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { AutoService } from './services/auto.service';
import { HttpWrapperService } from './services/http-wrapper.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AutoComponent,
    MainComponent,
    CalendarComponent,
    EventComponent,
    EventDialogComponent,
    PostComponent,
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
    AutoService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ EventDialogComponent ]
})
export class AppModule { }
