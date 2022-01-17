import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: '[navbar-dropdown]',
  templateUrl: './navbar-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDropdownComponent implements OnInit {

  isRight: boolean = false

  constructor(private itemElement: ElementRef) { }

  get thisElement(): Element {
    return (this.itemElement.nativeElement as Element)
  }

  ngOnInit(): void {
    this.thisElement.classList.add("navbar-item", "has-dropdown")
    if (this.thisElement.hasAttribute("is-right")) {
      this.isRight = true
    }
  }

  toggleDropdown(): void {
    this.thisElement.classList.toggle("is-active")
  }

}
