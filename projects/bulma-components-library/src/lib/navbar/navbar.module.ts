import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarStartComponent } from './navbar-start/navbar-start.component';
import { NavbarEndComponent } from './navbar-end/navbar-end.component';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { NavbarDividerComponent } from './navbar-divider/navbar-divider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarStartComponent,
    NavbarEndComponent,
    NavbarDropdownComponent,
    NavbarDividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavbarItemComponent,
    NavbarBrandComponent,
    NavbarStartComponent,
    NavbarEndComponent,
    NavbarDropdownComponent,
    NavbarDividerComponent
  ]
})
export class NavbarModule { }
