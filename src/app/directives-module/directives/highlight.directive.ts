import {Directive, ElementRef, OnInit, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[highlight-directive]',
})
export class HighlightDirective implements OnInit, AfterViewInit{
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
      console.log("highlight-directive ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("highlight-directive ngAfterViewInit");
  }
}