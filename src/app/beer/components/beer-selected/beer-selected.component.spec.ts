import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSelectedComponent } from './beer-selected.component';

describe('BeerSelectedComponent', () => {
  let component: BeerSelectedComponent;
  let fixture: ComponentFixture<BeerSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
