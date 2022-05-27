import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) { }
    
  public translateText(source:string, target:string, text:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        /* "Accept-Encoding": "application/gzip", */
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "63aa91b737msh3c43f62a690e782p1d8f79jsnc77a444a4b08"
      }),
    }
    const body = new HttpParams()
    .set('q',text)
    .set('target',target)
    .set('source',source);
     return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOptions);
  } 
}
 