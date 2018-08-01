import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFormComponent } from './beer-form.component';

describe('BeerFormComponent', () => {
  let component: BeerFormComponent;
  let fixture: ComponentFixture<BeerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
