import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './components/auth';
import { AutoComponent } from './components/auto';
import { MainComponent } from './components/main';

import { LoggedInGuard, LoggedOutGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '',      redirectTo: 'main',       pathMatch: 'full' },
  { path: 'login', component: AuthComponent, canActivate: [ LoggedOutGuard ] },
  { path: 'main',  component: MainComponent, canActivate: [ LoggedInGuard ] },
  { path: 'auto',  component: AutoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
