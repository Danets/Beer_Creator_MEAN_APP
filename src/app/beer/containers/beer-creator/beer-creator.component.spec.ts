import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreatorComponent } from './beer-creator.component';

describe('BeerCreatorComponent', () => {
  let component: BeerCreatorComponent;
  let fixture: ComponentFixture<BeerCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
