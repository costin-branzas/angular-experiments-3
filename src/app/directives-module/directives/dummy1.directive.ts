import {Directive, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Directive({
  selector: '[dummy-directive1]',
})
export class DummyDirective1 implements OnInit, AfterViewInit{
  constructor(private el: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
    //console.log("dummy-directive constructor");
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
      //console.log("dummy-directive ngOnInit");
      this.el.nativeElement.style.backgroundColor = 'orange';
  }

  ngAfterViewInit(): void {
    console.log("dummy-directive ngAfterViewInit");
    this.el.nativeElement.style.backgroundColor = 'red';
    //this.changeDetectorRef.detectChanges();
  }
}