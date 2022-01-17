import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar-divider',
  templateUrl: './navbar-divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDividerComponent implements OnInit {

  constructor(private itemElement: ElementRef) { }

  get thisElement(): Element {
    return (this.itemElement.nativeElement as Element)
  }

  ngOnInit(): void {
      this.thisElement.classList.add('navbar-divider')
  }

}
