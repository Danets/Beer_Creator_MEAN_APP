import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
@HostListener('input', ['$event'])
onKeyDown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;
  let trimmed = input.value.replace(/\s+/g, '');
  if (trimmed.length > 8) {
    trimmed = trimmed.substr(0, 8);
  }
  let numbers = [];
  for (let i = 0; i < trimmed.length; i += 2) {
    numbers.push(trimmed.substr(i, 2));
  }
  input.value = numbers.join(' ');

}
  constructor() { }

}
