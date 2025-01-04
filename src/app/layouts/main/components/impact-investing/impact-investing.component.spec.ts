import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInvestingComponent } from './impact-investing.component';

describe('ImpactInvestingComponent', () => {
  let component: ImpactInvestingComponent;
  let fixture: ComponentFixture<ImpactInvestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactInvestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
