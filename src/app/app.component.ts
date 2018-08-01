import { Component } from '@angular/core';
import { BeerService } from './beer/beer.service';
import {Observable } from 'rxjs';
import { Beer, Ingredient } from './beer/beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beer paradise!';

  constructor(private beerService: BeerService) { }
}
