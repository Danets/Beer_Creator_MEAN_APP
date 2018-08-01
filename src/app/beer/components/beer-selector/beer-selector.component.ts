import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Beer, Ingredient } from '../../beer';

@Component({
  selector: 'app-beer-selector',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './beer-selector.component.html',
  styleUrls: ['./beer-selector.component.scss']
})
export class BeerSelectorComponent implements OnInit {
  touched = false;

  @Input()
  parent: FormGroup;

  @Input()
  selected: Ingredient[];

  @Input()
  ingredients: Ingredient[];

  @Output()
  select = new EventEmitter<Ingredient>();

  get invalid() {
    return (
      this.parent.hasError('noIngredients') &&
      this.touched
    );
  }

  exists(ingredient: Ingredient) {
    return !!~this.selected.indexOf(ingredient);
  }

  isActive(ingredient: Ingredient) {
    return this.exists(ingredient);
  }

  onSelect(ingredient: Ingredient) {
    this.touched = true;
    this.select.emit(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
