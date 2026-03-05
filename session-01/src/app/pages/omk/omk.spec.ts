import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Omk } from './omk';

describe('Omk', () => {
  let component: Omk;
  let fixture: ComponentFixture<Omk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Omk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Omk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
