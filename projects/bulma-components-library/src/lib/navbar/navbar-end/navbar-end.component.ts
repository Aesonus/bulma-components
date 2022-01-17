import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar-end',
  templateUrl: './navbar-end.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarEndComponent implements OnInit {

  constructor(private itemElement: ElementRef) { }

  ngOnInit(): void {
    (this.itemElement.nativeElement as Element).classList.add("navbar-end")
  }

}
