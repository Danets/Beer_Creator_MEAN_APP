import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerNameComponent } from './beer-name.component';

describe('BeerNameComponent', () => {
  let component: BeerNameComponent;
  let fixture: ComponentFixture<BeerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
