import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar-brand',
  templateUrl: './navbar-brand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBrandComponent implements OnInit {

  constructor(private thisElement: ElementRef) { }

  ngOnInit(): void {
    (this.thisElement.nativeElement as Element).classList.add("navbar-brand")
  }

}
