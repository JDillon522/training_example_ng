import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DetailComponent } from './users/detail/detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TrickeryComponent } from './trickery/trickery.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: DetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'trickery', component: TrickeryComponent }
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
