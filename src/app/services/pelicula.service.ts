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
         /*  'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064' */
          /* 'X-RapidAPI-Key': '63aa91b737msh3c43f62a690e782p1d8f79jsnc77a444a4b08' */
        }),
        params: {lang: 'es', id: idPeli},
      };
     
      console.log("https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/",httpOptions);
      return this._http.get('https://filmaffinity-unofficial.p.rapidapi.com/movie/detail/',httpOptions);
    }

}
