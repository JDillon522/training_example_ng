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
import { DetailComponent } from './users/detail/detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AddUserComponent } from './users/dialog/add-user/add-user.component';
import { DeleteUserComponent } from './users/dialog/delete-user/delete-user.component';
import { EditUserComponent } from './users/dialog/edit-user/edit-user.component';
import { TrickeryComponent } from './trickery/trickery.component';
import { FirstChildComponent } from './trickery/first-child/first-child.component';
import { SecondChildComponent } from './trickery/first-child/second-child/second-child.component';
import { SiblingChildComponent } from './trickery/sibling-child/sibling-child.component';
import { SetterComponent } from './trickery/first-child/setter/setter.component';
import { ChangesComponent } from './trickery/first-child/changes/changes.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeroesComponent,
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    TrickeryComponent,
    FirstChildComponent,
    SecondChildComponent,
    SiblingChildComponent,
    SetterComponent,
    ChangesComponent,
    DetailComponent,
    FourOFourComponent
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
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserComponent,
    DeleteUserComponent,
    EditUserComponent
  ]
})
export class AppModule { }
