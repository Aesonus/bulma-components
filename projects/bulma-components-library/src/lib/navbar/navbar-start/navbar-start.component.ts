import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar-start',
  templateUrl: './navbar-start.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarStartComponent implements OnInit {

  constructor(private thisElement: ElementRef) { }

  ngOnInit(): void {
    (this.thisElement.nativeElement as Element).classList.add("navbar-start")
  }

}
