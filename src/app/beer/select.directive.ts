import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appSelect]'
})
export class SelectDirective {
    selectedBeer = this.elem.nativeElement;
    @HostListener('click') onSelect() {
        this.addClass();
    }
    constructor(private elem: ElementRef, private renderer: Renderer2) { }
    private addClass() {
        this.renderer.addClass(this.selectedBeer, 'selected');
    }
}