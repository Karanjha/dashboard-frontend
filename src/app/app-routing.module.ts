import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components/auth';
import { MainComponent } from './components/main';
import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [
  { path: '',      redirectTo: 'main',       pathMatch: 'full' },
  { path: 'login', component: AuthComponent, canActivate: [ LoggedOutGuard ] },
  { path: 'main',  component: MainComponent, canActivate: [ LoggedInGuard ] },
  { path: 'event', component: EventComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
