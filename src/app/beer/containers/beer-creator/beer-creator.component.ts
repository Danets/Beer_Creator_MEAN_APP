import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Beer, Ingredient } from '../../beer';

import { BeerService } from '../../beer.service';

@Component({
  selector: 'app-beer-creator',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './beer-creator.component.html',
  styleUrls: ['./beer-creator.component.scss']
})
export class BeerCreatorComponent implements OnInit {
  //beers$ = this.beerService.select<Beer[]>('beers');
  //ingredients$ = this.beerService.select<Ingredient[]>('ingredients');
  beers$: Observable<Beer[]>;
  ingredients$: Observable<Ingredient[]>;
  index: number;

  constructor(private beerService: BeerService, private store: Store<fromStore.BeersState>) { }

  ngOnInit() {
    this.beers$ = this.store.select(fromStore.getBeers);
    this.ingredients$ = this.store.select(fromStore.getIngredients);
    this.store.dispatch(new fromStore.GetBeer());
  }
  addBeer(beer: Beer) {
    //this.beerService.addBeer(beer).subscribe(data => console.log(data));
    if (!beer.hasOwnProperty('img')) {
      beer.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZYr2VC823tIrgOzt0ia76oYNHUPfXzOQaC_vZzNyWzxSdb7J';
    }
    this.store.dispatch(new fromStore.AddBeer(beer));
  }
  deleteBeer(beer) {
    //this.beerService.deleteBeer(beer['_id']).subscribe();
    this.store.dispatch(new fromStore.DeleteBeer(beer));
    console.log(beer);
  }

}
