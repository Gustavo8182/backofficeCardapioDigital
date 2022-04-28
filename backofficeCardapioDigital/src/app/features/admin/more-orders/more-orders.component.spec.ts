import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOrdersComponent } from './more-orders.component';

describe('MoreOrdersComponent', () => {
  let component: MoreOrdersComponent;
  let fixture: ComponentFixture<MoreOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
