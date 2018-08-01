import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromBeer from '../reducers/beer.reducer';

import { Beer, Ingredient } from '../../beer';

export const getBeers = createSelector(fromFeature.getBeersState, fromBeer.getBeers);
export const getIngredients = createSelector(fromFeature.getBeersState, fromBeer.getIngredients);



