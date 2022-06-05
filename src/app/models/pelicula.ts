export class Pelicula {
    _id: string;
    title: string;
    year: string;
    genres: Array<String>;
    image: string;

    constructor (_id: string ="", title: string = "", year: string = " ", genres: Array<String> = [], image:string=""
    ){
        this._id = _id;
        this.title = title;
        this.year = year;
        this.genres = genres;
        this.image = image;
    }
}
 