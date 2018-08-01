import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as beerActions from '../actions/beer.action';
import { BeerService } from '../../beer.service';

@Injectable()
export class BeerEffects {
  constructor(
    private actions$: Actions,
    private  beerService:  BeerService
  ) {}

  @Effect()
  loadBeer$ = this.actions$.ofType(beerActions.GET_BEER).pipe(
    switchMap(() => {
      return this.beerService
      .getBeers()
      .pipe(
        map(beers => new beerActions.GetBeerSuccess(beers))
        );
    })
  );

  @Effect()
  createBeer$ = this.actions$.ofType(beerActions.ADD_BEER).pipe(
    map((action: beerActions.AddBeer) => action.payload),
    switchMap(beer => {
      return this.beerService
        .addBeer(beer)
        .pipe(
          map(beer => new beerActions.AddBeerSuccess(beer)),
        );
    })
  );

  @Effect()
  deleteBeer$ = this.actions$.ofType(beerActions.DELETE_BEER).pipe(
    map((action: beerActions.DeleteBeer) => action.payload),
    switchMap(beer => {
      return this.beerService
        .deleteBeer(beer['_id'])
        .pipe(
          map(() => new beerActions.DeleteBeerSuccess(beer)),
        );
    })
  );
}
