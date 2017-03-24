import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ClipboardModule } from 'ngx-clipboard';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth';
import { AutoComponent } from './components/auto';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { DetailComponent } from './components/detail';
import { EventComponent } from './components/event/event.component';
import { EventDialogComponent } from './components/event/event-dialog/event-dialog.component';
import { HelpDialogComponent } from './components/help-dialog';
import { MailDialogComponent } from './components/mail-dialog';
import { MainComponent } from './components/main';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search';
import { SearchService } from './services/search.service';
import { StudentComponent } from './components/student';

import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { AutoService } from './services/auto.service';
import { HttpWrapperService } from './services/http-wrapper.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AutoComponent,
    DetailComponent,
    HelpDialogComponent,
    MailDialogComponent,
    MainComponent,
    CalendarComponent,
    EventComponent,
    EventDialogComponent,
    PostComponent,
    SearchComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    MasonryModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    HttpWrapperService,
    AutoService,
    LoggedInGuard,
    LoggedOutGuard,
    SearchService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    DetailComponent,
    EventDialogComponent,
    HelpDialogComponent,
    MailDialogComponent
  ]
})
export class AppModule { }
