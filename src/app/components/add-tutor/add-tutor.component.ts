import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutors.service';

@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.component.html',
  styleUrls: ['./add-tutor.component.css']
})
export class AddTutorComponent implements OnInit {
  tutor = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorService: TutorService) { }

  ngOnInit(): void {
  }

  saveTutor(): void {
    const data = {
      title: this.tutor.title,
      description: this.tutor.description
    };

    this.tutorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutor(): void {
    this.submitted = false;
    this.tutor = {
      title: '',
      description: '',
      published: false
    };
  }

}