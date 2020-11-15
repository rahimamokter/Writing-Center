
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutors', pathMatch: 'full' },
  { path: 'tutors', component: TutorListComponent },
  { path: 'tutors/:id', component: TutorDetailsComponent },
  { path: 'add', component: AddTutorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
