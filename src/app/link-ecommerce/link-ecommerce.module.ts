import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchboxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SearchboxComponent,
    CardListComponent
  ]
})
export class LinkEcommerceModule { }
