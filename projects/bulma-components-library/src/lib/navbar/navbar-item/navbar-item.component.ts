import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: '[navbar-item]',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent implements OnInit {

  constructor(private itemElement: ElementRef) { }

  ngOnInit(): void {
    (this.itemElement.nativeElement as Element).classList.add("navbar-item")
  }

}
