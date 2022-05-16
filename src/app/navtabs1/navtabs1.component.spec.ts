import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navtabs1Component } from './navtabs1.component';

describe('Navtabs1Component', () => {
  let component: Navtabs1Component;
  let fixture: ComponentFixture<Navtabs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navtabs1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navtabs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
