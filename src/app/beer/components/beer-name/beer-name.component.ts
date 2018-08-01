import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-beer-name',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './beer-name.component.html',
  styleUrls: ['./beer-name.component.scss']
})
export class BeerNameComponent implements OnInit {
  @Input() parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
