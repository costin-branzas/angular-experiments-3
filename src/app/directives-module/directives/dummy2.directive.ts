import {Directive, ElementRef, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { Observable } from 'rxjs';

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
    
    //*All the "doesn not work" below refers to Angular 4

    //does not work, ngAfterViewInit does not run on directive 1
    // this.changeDetectorRef.detectChanges();

    //both directives work, but detectChanges blows up in the console (either direct call or through class method)
    // setTimeout(this.changeDetectorRef.detectChanges, 1000);
    // setTimeout(this.callDetectChanges, 1000);

    //works (ngAfterViewInit called on both directives)
    // Observable.interval(1000).take(1).subscribe((data) => {
    //   console.log("detecting changes as part of Observable.interval subscription, data: ", data);
    //   this.changeDetectorRef.detectChanges();
    // });

    //does not work, ngAfterViewInit does not run on directive 1
    // Observable.of(1).subscribe((data) => {
    //   console.log("detecting changes as part of Observable.of subscription, data: ", data);
    //   this.changeDetectorRef.detectChanges();
    // });

    //works (as long as delay is present, even with 0 value)
    // Observable.of(1).delay(0).subscribe((data) => {
    //   console.log("detecting changes as part of Observable.of.delay subscription, data: ", data);
    //   this.changeDetectorRef.detectChanges();
    // });
  }
  
  private callDetectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}