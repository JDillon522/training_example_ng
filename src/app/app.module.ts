// ANGULAR 2 COMPONENTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// 3RD PARTY LIBRARIES
import { MaterialModule } from '@angular/material';

// MY COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AddUserComponent } from './users/dialog/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeroesComponent,
    AddUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserComponent
  ]
})
export class AppModule { }
