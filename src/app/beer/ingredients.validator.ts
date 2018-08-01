import { FormArray, AbstractControl } from '@angular/forms';

export const IngredientsValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const ingredients = (control.get('ingredients') as FormArray).value;
  return ingredients.length ? null : { noIngredients: true };
}
