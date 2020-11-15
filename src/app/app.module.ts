import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorDetailsComponent,
    TutorListComponent,
    AddTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
