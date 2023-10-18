import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../interfaces/country';
@Component({
  selector: 'app-detalle-pagina',
  templateUrl: './detalle-pagina.component.html',
})
export class DetallePaginaComponent implements OnInit{

  public detal?:Country;
  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
               private countriesService:CountriesService){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ide})=>this.countriesService.GetAllDetallePagina(ide)),  //estos "ide" no son al alazar, son los q vienen del los path del router
      )
      .subscribe(resp=>{
          if(!resp){
            return this.router.navigateByUrl('');
          }
           return this.detal=resp
        });
  }
}
