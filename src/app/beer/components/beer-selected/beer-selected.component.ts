import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Beer, Ingredient } from '../../beer';

@Component({
  selector: 'app-beer-selected',
  templateUrl: './beer-selected.component.html',
  styleUrls: ['./beer-selected.component.scss']
})
export class BeerSelectedComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Ingredient[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
