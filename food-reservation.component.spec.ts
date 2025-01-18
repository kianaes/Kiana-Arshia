import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodReservationComponent } from './food-reservation.component';

describe('FoodReservationComponent', () => {
  let component: FoodReservationComponent;
  let fixture: ComponentFixture<FoodReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
