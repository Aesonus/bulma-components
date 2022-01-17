import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  constructor(private navElement: ElementRef) { }

  get thisElement() {
    return (this.navElement.nativeElement as Element)
  }

  ngOnInit(): void {
    this.thisElement.classList.add("hero")
  }

}
