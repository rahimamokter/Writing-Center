import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorsComponent } from './add-tutors.component';

describe('AddTutorsComponent', () => {
  let component: AddTutorsComponent;
  let fixture: ComponentFixture<AddTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTutorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
