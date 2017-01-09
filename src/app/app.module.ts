// ANGULAR 2 COMPONENTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3RD PARTY LIBRARIES
import { MaterialModule } from '@angular/material';

// MY COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeroesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
