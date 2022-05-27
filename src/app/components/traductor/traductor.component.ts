import { Component, OnInit } from '@angular/core';
import { TraductorService } from '../../services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  source!:string;
  target!:string;
  texto!:string;

  textoTraducido!:string;

  constructor(private traductorService:TraductorService) { }

  traducir(){
    this.traductorService.translateText(this.source, this.target, this.texto).subscribe(
      result => {
        console.log(result);
        this.textoTraducido = result.data.translations[0].translatedText;
        console.log(this.texto);
      },
      error => {
        console.log("Error en la petición");
      }
    )
  }

  selectOption(option: string):void{
    switch (option) {
      case "sit":
        this.source = "it";
        break;
      case "sru":
        this.source = "ru";
        break;
      case "sen":
        this.source = "en";
        break;
      case "ses":
        this.source = "es";
        break;
      case "tit":
        this.target = "it";
        break;
      case "tru":
        this.target = "ru";
        break;
      case "ten":
        this.target = "en";
        break;
      case "tes":
        this.target = "es";
        break;
    }
      console.log(this.source);
    console.log(this.target);
    console.log(this.texto);
  }

  limpiar(){
    this.source="";
    this.target="";
    this.texto="";
    this.textoTraducido="";
  }

  ngOnInit(): void {
  }
  

}
