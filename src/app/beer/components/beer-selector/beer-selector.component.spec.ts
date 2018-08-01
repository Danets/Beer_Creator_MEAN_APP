import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSelectorComponent } from './beer-selector.component';

describe('BeerSelectorComponent', () => {
  let component: BeerSelectorComponent;
  let fixture: ComponentFixture<BeerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
