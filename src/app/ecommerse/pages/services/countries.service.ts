import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,map,catchError,of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string='https://restcountries.com/v3.1'

  constructor(private Http:HttpClient) { }


getAllCapital(newIn:string):Observable<Country[]>{
  return this.Http.get<Country[]>(`${this.apiUrl}/capital/${newIn}`)
}

getAllPais(newPais:string):Observable<Country[]>{
  return this.Http.get<Country[]>(`${this.apiUrl}/name/${newPais}`)
}

getAllRegion(newRegion:string){
  return this.Http.get<Country[]>(`${this.apiUrl}/region/${newRegion}`)
}
//metodo para el buscador de pagina detalle
GetAllDetallePagina(pag:string):Observable<Country | null>{
  const URLDetalle=`${this.apiUrl}/alpha/${pag}`;
  return this.Http.get<Country[]>(URLDetalle)
    .pipe(
      map(res=>res.length > 0 ? res [0] : null),
      catchError( ()=>of(null))
    );
}

}
