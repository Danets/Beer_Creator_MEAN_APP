import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { Beer, Ingredient } from '../../beer';
import { IngredientsValidator } from '../../ingredients.validator';

@Component({
  selector: 'app-beer-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {
  @Input() ingredients: Ingredient[];
  @Output() add = new EventEmitter<FormGroup>();
form = this.fb.group({
  name: ['', Validators.required],
  ingredients: this.fb.array([])
},{
  validator: IngredientsValidator
})

  constructor(private fb: FormBuilder) { }

  get control() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(ingredient: Ingredient) {
    this.control.push(new FormControl(ingredient));
  }
  removeIngredient(index: number) {
    this.control.removeAt(index);
  }
  selectIngredient(ingredient: Ingredient) {
    const index = this.control.value.indexOf(ingredient);
    if (!!~index) {
      this.removeIngredient(index);
    } else {
      this.addIngredient(ingredient);
    }
  }
  onSubmit() {
  if (this.form.invalid) {
    return;
  }
  this.add.emit(this.form.value);
  }

  ngOnInit() {}

}
