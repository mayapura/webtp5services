export class Pelicula {
    id: string;
    title: string;
    year: number;
    genres: Array<String>;
    image: string;

    constructor (id: string ="", title: string = "", year: number = 0, genres: Array<String> = [], image:string=""
    ){
        this.id = id;
        this.title = title;
        this.year = year;
        this.genres = genres;
        this.image = image;
    }

}
