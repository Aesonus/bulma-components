import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarStartComponent } from './navbar-start/navbar-start.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarStartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarStartComponent
  ]
})
export class NavbarModule { }
