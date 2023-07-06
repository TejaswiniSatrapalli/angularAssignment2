import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBankComponent } from './business-bank.component';

describe('BusinessBankComponent', () => {
  let component: BusinessBankComponent;
  let fixture: ComponentFixture<BusinessBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
