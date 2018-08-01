import {Action} from '@ngrx/store';
import * as beerAction from '../actions/beer.action';

import { Beer, Ingredient } from '../../beer';

export interface State {
  beers: Beer[];
  ingredients: any;
}
export const initialState: State = {
  beers: [/*
     {
      id: 1,
      name: 'Carlsberg',
      ingredients: ['Solod', 'Rice', 'Hop']
    },
    {
      id: 2,
      name: 'Rogan',
      ingredients: ['Solod', 'Corn', 'Apple', 'Hop']
    },
     {
      id: 3,
      name: 'Ginness',
      ingredients: ['Solod', 'Rice', 'Hop']
    }*/
  ],
  ingredients: ['Solod', 'Rice', 'Seed', 'Corn', 'Banana', 'Apple']
}

export function reducer(state = initialState, action: beerAction.Action) {
  switch (action.type) {
    case beerAction.GET_BEER: {
      return {
        ...state
      };
    }
    case beerAction.GET_BEER_SUCCESS: {
      return {
        ...state,
        beers: [...state.beers, ...action.payload],
        ingredients: [...state.ingredients]
      };
    }
    case beerAction.ADD_BEER_SUCCESS: {
      const beer: Beer = action.payload;
      return {
        ...state,
        beers: [...state.beers, beer],
        ingredients: [...state.ingredients]
      };
    }
    case beerAction.DELETE_BEER_SUCCESS: {
      const beer: Beer = action.payload;
      return {
        ...state,
        beers: [...state.beers.filter(item => item !== beer)],
        ingredients: [...state.ingredients]
      };
    }
    case beerAction.SELECT_BEER: {
      const selectedBeer: Beer = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export const getBeers = (state: State) => state.beers;
export const getIngredients = (state: State) => state.ingredients;
