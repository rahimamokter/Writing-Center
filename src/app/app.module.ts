import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorsComponent } from './components/add-tutors/add-tutors.component';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorsComponent,
    TutorDetailsComponent,
    TutorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
