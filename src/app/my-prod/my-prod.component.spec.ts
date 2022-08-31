import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProdComponent } from './my-prod.component';

describe('MyProdComponent', () => {
  let component: MyProdComponent;
  let fixture: ComponentFixture<MyProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
