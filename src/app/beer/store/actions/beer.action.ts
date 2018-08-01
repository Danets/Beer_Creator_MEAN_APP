import {Action} from '@ngrx/store';
import { Beer, Ingredient } from '../../beer';

export const GET_BEER = '[Beers] Get Beer';
export const GET_BEER_SUCCESS = '[Beers] Get Beer Success';
export const ADD_BEER = '[Beers] Add Beer';
export const ADD_BEER_SUCCESS = '[Beers] Add Beer Success';
export const DELETE_BEER = '[Beers] Delete Beer';
export const DELETE_BEER_SUCCESS = '[Beers] Delete Beer SUCCESS';
export const SELECT_BEER = '[Beers] Select Beer';

export class GetBeer implements Action {
  readonly type = GET_BEER;
}
export class GetBeerSuccess implements Action {
  readonly type = GET_BEER_SUCCESS;
  constructor(public payload: Beer[]) {}
}
export class AddBeer implements Action {
  readonly type = ADD_BEER;
  constructor(public payload: Beer) { }
}
export class AddBeerSuccess implements Action {
  readonly type = ADD_BEER_SUCCESS;
  constructor(public payload: Beer) { }
}
export class DeleteBeer implements Action {
  readonly type = DELETE_BEER;
  constructor(public payload: Beer) { }
}
export class DeleteBeerSuccess implements Action {
  readonly type = DELETE_BEER_SUCCESS;
  constructor(public payload: Beer) { }
}
export class SelectBeer implements Action {
  readonly type = SELECT_BEER;
  constructor(public payload: Beer) { }
}
export type Action = GetBeer | GetBeerSuccess | AddBeer | AddBeerSuccess | DeleteBeer | DeleteBeerSuccess | SelectBeer;
