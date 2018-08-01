import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beer-button',
  templateUrl: './beer-button.component.html',
  styleUrls: ['./beer-button.component.scss']
})
export class BeerButtonComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
 
  constructor() { }

  ngOnInit() {
  }

}
