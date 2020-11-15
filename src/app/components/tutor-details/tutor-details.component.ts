import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.css']
})
export class TutorDetailsComponent implements OnInit {
  currentTutor = null;
  message = '';

  constructor(
    private tutorService: TutorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutor(this.route.snapshot.paramMap.get('id'));
  }

  getTutor(id): void {
    this.tutorService.get(id)
      .subscribe(
        data => {
          this.currentTutor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTutor.title,
      description: this.currentTutor.description,
      published: status
    };

    this.tutorService.update(this.currentTutor.id, data)
      .subscribe(
        response => {
          this.currentTutor.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutor(): void {
    this.tutorService.update(this.currentTutor.id, this.currentTutor)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutor was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutor(): void {
    this.tutorService.delete(this.currentTutor.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutor']);
        },
        error => {
          console.log(error);
        });
  }
}