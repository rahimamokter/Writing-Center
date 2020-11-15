import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorComponent } from './add-tutor.component';

describe('AddTutorComponent', () => {
  let component: AddTutorComponent;
  let fixture: ComponentFixture<AddTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
