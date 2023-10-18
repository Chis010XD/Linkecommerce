import { Component, Input } from '@angular/core';
import { Country } from 'src/app/ecommerse/pages/interfaces/country';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent {

  @Input()
  public ListCountry:Country[]=[]

}
