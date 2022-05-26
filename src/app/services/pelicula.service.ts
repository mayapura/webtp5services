import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private _http: HttpClient ) { }
  
    public getPelicula(idPeli:string):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
          'X-RapidAPI-Host': 'filmaffinity-unofficial.p.rapidapi.com',
          'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064'
        }),
        params: {lang: 'es', id: idPeli},
      };
     
      console.log("https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/",httpOptions);
      return this._http.get('https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/',httpOptions);
    }

}
