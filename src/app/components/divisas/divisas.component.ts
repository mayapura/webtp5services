import { Component, OnInit } from '@angular/core';
import { DivisaService } from '../../services/divisa.service';
import { Divisa } from '../../models/divisa';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  divisa!:Divisa;
  fromType!:string;
  toType!:string;
  fromValue!:string;
  valueConvert!:string;
  countries: Array<string>= ["USD", "GBR", "ARS"];
  listCountries!: Array<Divisa>;
  valueMoney!:"1";

  constructor(private divisaService: DivisaService) { }
  
  conversion(){
    this.divisaService.getConversor(this.fromType, this.toType,this.fromValue ).subscribe(
      (result) => {
        console.log(result);
         this.valueConvert = result.result;
         console.log(this.valueConvert);
      },
      error => { alert("Error en la petición"); }
    );
  }

/* Las solicitudes que procesa son muchas */
  loadTable(){
     for(let i=0; i<this.countries.length; i++){
      for(let j=0; j<this.countries.length; j++){
      console.log(this.countries[i]);
         this.divisaService.getConversor(this.countries[i], this.countries[j], this.valueMoney).subscribe(
          (result) => {
            this.divisa.result = result.result;
            this.divisa.fromValue = this.valueMoney;
            this.listCountries.push(this.divisa);
            this.divisa = new Divisa();
            console.log(this.listCountries);
          },
          error => {alert("Error en la petición")}
        ) 
       }
    }
  }

  ngOnInit(): void {
    /* this.loadTable(); */
  }

}
