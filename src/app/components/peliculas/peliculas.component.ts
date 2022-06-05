import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
 
  peliculas!: Array<any>;
  pelicula!: Pelicula;

  constructor(private peliculaService: PeliculaService) {}

  cargarPeliculas(): void {

    var idPeliculas = [
      "61e8a4c3f2eb8ced20633f4a",
       "61e8a4bdf2eb8ced20633f45",
      "61e8a4bcf2eb8ced20633f43",
      "61e8a4bbf2eb8ced20633f40",
      "61e8a4b9f2eb8ced20633f3d",
      "61e8a4b7f2eb8ced20633f3a",
    ];
    
    for (let id of idPeliculas){
      this.getPeliculaId(id);
      console.log(id)
    }
  }

   getPeliculaId(idPeli: string){
    this.peliculaService.getPelicula(idPeli).subscribe(
      (result) =>{
        console.log("RESULT: ",result.result)
        
        console.log(result.result._id,+", "+result.result.title,+", "+result.result.year,+", "+result.result.genres[0].name+", "+result.result.image);
        this.pelicula = new Pelicula(result.result._id, result.result.title,result.result.year,result.result.genres,result.result.image);
       console.log(this.pelicula);
         this.peliculas.push(this.pelicula);
      },
      error => {
        alert("Error en la petición")
      }
    );

  } 

  ngOnInit(): void {
     this.peliculas = new Array<Pelicula>();
    this.cargarPeliculas(); 
  }

}
