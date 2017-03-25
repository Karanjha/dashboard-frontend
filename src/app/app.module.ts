import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ClipboardModule } from 'ngx-clipboard';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MasonryModule } from 'angular2-masonry';
import { NgGridModule } from 'angular2-grid';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth';
import { AutoComponent } from './components/auto';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { DetailComponent } from './components/detail';
import { EventComponent } from './components/event/event.component';
import { EventDialogComponent } from './components/event/event-dialog/event-dialog.component';
import { FeedComponent } from './components/feed/feed.component';
import { HelpDialogComponent } from './components/help-dialog';
import { MailDialogComponent } from './components/mail-dialog';
import { MainComponent } from './components/main';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search';
import { StudentComponent } from './components/student';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsButtonComponent } from './components/settings/settings-button/settings-button.component';
import { WeatherComponent } from './components/weather';

import { AuthService } from './services/auth.service';
import { AutoService } from './services/auto.service';
import { EventService } from './services/event.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { SearchService } from './services/search.service';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AutoComponent,
    DetailComponent,
    FeedComponent,
    HelpDialogComponent,
    MailDialogComponent,
    MainComponent,
    CalendarComponent,
    EventComponent,
    EventDialogComponent,
    PostComponent,
    SearchComponent,
    StudentComponent,
    SettingsComponent,
    SettingsButtonComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    MasonryModule,
    MaterialModule,
    NgGridModule
  ],
  providers: [
    AuthService,
    AutoService,
    EventService,
    HttpWrapperService,
    SearchService,
    WeatherService
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
