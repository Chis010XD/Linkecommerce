import { Component } from '@angular/core';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
})
export class RegionPageComponent {


  public ListCountry:Country[]=[]

constructor(private countriesService:CountriesService){}

  searchByRegion(newInput:string){
    this.countriesService.getAllRegion(newInput).subscribe(
      resp=>{
        console.log(resp)
        this.ListCountry=resp
      }
    )

  }


}
