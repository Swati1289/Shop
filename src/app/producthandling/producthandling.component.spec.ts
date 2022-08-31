import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthandlingComponent } from './producthandling.component';

describe('ProducthandlingComponent', () => {
  let component: ProducthandlingComponent;
  let fixture: ComponentFixture<ProducthandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducthandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducthandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
