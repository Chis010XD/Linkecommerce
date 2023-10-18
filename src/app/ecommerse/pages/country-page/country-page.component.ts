import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  public ListCountry:Country[]=[]

constructor(private countriesService:CountriesService){}

  searchByCountry(newInput:string){
    this.countriesService.getAllPais(newInput).subscribe(
      resp=>{
        console.log(resp)
        this.ListCountry=resp
      }
    )

  }


}
