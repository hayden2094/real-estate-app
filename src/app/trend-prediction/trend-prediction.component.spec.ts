import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPredictionComponent } from './trend-prediction.component';

describe('TrendPredictionComponent', () => {
  let component: TrendPredictionComponent;
  let fixture: ComponentFixture<TrendPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
