import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(private navElement: ElementRef) { }

  get thisElement() {
    return (this.navElement.nativeElement as Element)
  }

  ngOnInit(): void {
    this.thisElement.classList.add("navbar")
  }

  toggleMenu(burger: any, target: Element): void {
    target.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  }

}
