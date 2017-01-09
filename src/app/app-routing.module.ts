import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HeroesComponent } from './heroes/heroes.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
