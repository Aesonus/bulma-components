import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(private navElement: ElementRef) { }

  ngOnInit(): void {
    (this.navElement.nativeElement as Element).classList.add("navbar")
  }

}
