import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth';
import { MainComponent } from './components/main';

import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
