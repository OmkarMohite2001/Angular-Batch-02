import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSummery } from './student-summery';

describe('StudentSummery', () => {
  let component: StudentSummery;
  let fixture: ComponentFixture<StudentSummery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSummery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSummery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
