import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Beer, Ingredient } from '../../beer';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  @Input() beers: Beer[];
  @Output() delete = new EventEmitter<Beer>();
  selectedBeer: Beer;
  constructor() { }

  ngOnInit() {
  }

  onSelect(beer: Beer) {
    this.selectedBeer = this.beers.find(item => item === beer);
  }

  onDelete() {
    this.delete.emit(this.selectedBeer);
  }


}
