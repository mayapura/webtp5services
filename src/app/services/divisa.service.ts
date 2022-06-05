import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public getConversor(fromType:string, toType: string , fromValue: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key': 'ef831c3b77mshd75ba19551ea8cap137c6cjsnd2e4b6954064'
      }),
      params: {}
    };
     let body ={
      "from-value": fromValue,
      "from-type": fromType,
      "to-type": toType
    }
    console.log()
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOptions);
  }
}
