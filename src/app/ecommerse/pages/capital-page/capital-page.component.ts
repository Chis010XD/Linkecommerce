import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
})
export class CapitalPageComponent {

  public ListCountry:Country[]=[]

constructor(private countriesService:CountriesService){}

  searchByCapital(newInput:string){
    this.countriesService.getAllCapital(newInput).subscribe(
      resp=>{
        console.log(resp)
        this.ListCountry=resp
      }
    )

  }



}
