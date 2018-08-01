import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerButtonComponent } from './beer-button.component';

describe('BeerButtonComponent', () => {
  let component: BeerButtonComponent;
  let fixture: ComponentFixture<BeerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
