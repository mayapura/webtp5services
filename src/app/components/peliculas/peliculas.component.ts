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
      "750283",
/*       "680139",
      "854941",
      "799532",
      "169639",
      "462034", */
    ];
    
    for (let id of idPeliculas){
      this.getPeliculaId(id);
      console.log(id)
    }
  }

   getPeliculaId(idPeli: string){
    this.peliculaService.getPelicula(idPeli).subscribe(
      (result) =>{
        console.log("RESULT: ",result)
        this.pelicula = new Pelicula();

        console.log(result.movie.id,+", "+result.movie.title,+", "+result.movie.year,+", "+result.movie.genres+", "+result.movie.images);
        
        this.pelicula.id = result.movie.id;
        this.pelicula.title = result.movie.title;
        this.pelicula.year = result.movie.year;
        this.pelicula.genres = result.movie.genres[1];
        this.pelicula.image = result.movie.images[0];
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
