import { Injectable } from '@angular/core';

import { Beer, Ingredient } from './beer';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import { catchError, tap, map, switchMap } from 'rxjs/operators';

import {Observable, of, throwError, BehaviorSubject } from 'rxjs';
//import {distinctUntilChanged, pluck} from 'rxjs/operators';

/*export interface State {
  beers: Beer[];
  ingredients: Ingredient[];
}

const state: State = {
  beers: [
    { name: 'Carlsberg', ingredients: ['Solod', 'Rice', 'Hop'] },
    { name: 'Becks', ingredients: ['Solod', 'Corn', 'Apple', 'Hop'] },
    { name: 'Ginness', ingredients: ['Solod', 'Rice', 'Hop'] }
  ],
  ingredients: [
    'Solod', 'Rice', 'Seed', 'Corn',
    'Hop', 'Apple'
  ]
};*/

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  //private subject = new BehaviorSubject<State>(state);
  //store = this.subject.asObservable().pipe(distinctUntilChanged());

  /*select<T> (name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  addBeer(beer: Beer) {
    const value = this.subject.value;
    this.subject.next({...value, beers: [...value.beers, beer]});
  }*/

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  apiUrl = '/api';
  index: number;
  constructor (private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getBeers(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  addBeer(data): Observable<any> {
    return this.http.post(this.apiUrl, data, this.httpOptions).pipe(
      catchError(this.handleError));
  }

  deleteBeer(id: string): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
