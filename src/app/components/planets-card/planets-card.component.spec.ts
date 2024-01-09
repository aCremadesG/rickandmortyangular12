import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsCardComponent } from './planets-card.component';

describe('PlanetsCardComponent', () => {
  let component: PlanetsCardComponent;
  let fixture: ComponentFixture<PlanetsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
