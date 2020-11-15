import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent implements OnInit {

  tutor: any;
  currentTutor = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorService: TutorService) { }

  ngOnInit(): void {
    this.retrieveTutor();
  }

  retrieveTutor(): void {
    this.tutorService.getAll()
      .subscribe(
        data => {
          this.tutor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutor();
    this.currentTutor = null;
    this.currentIndex = -1;
  }

  setActiveTutor(tutor, index): void {
    this.currentTutor = tutor;
    this.currentIndex = index;
  }

  removeAllTutor(): void {
    this.tutorService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutor();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.tutorService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}