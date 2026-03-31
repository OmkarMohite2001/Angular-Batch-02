import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentlist } from './studentlist';

describe('Studentlist', () => {
  let component: Studentlist;
  let fixture: ComponentFixture<Studentlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Studentlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
