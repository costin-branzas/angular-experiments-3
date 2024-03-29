import {Directive, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Directive({
  selector: '[dummy-directive2]',
})
export class DummyDirective2 implements OnInit, AfterViewInit{
  constructor(private el: ElementRef, private changeDetectorRef: ChangeDetectorRef) {
    //console.log("dummy-directive2 constructor");
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
      //console.log("dummy-directive2 ngOnInit");
      this.el.nativeElement.style.backgroundColor = 'orange';
  }

  ngAfterViewInit(): void {
    console.log("dummy-directive2 ngAfterViewInit");
    this.el.nativeElement.style.backgroundColor = 'red';
    this.changeDetectorRef.detectChanges();
  }
}