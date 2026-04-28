import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagemen } from './state-managemen';

describe('StateManagemen', () => {
  let component: StateManagemen;
  let fixture: ComponentFixture<StateManagemen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateManagemen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateManagemen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
