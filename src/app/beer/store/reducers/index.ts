import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromBeer from './beer.reducer';

export interface BeersState {
  beers: fromBeer.State;
}

export const reducers: ActionReducerMap<BeersState> = {
  beers: fromBeer.reducer,
};

export const getBeersState = createFeatureSelector<fromBeer.State>(
  'beers'
);
