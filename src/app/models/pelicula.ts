export class Pelicula {
    id: string;
    title: string;
    year: number;
    lang: string;
    genres: Array<String>;
    image: Array<String>;

    constructor (id: string ="", title: string = "", year: number = 0, lang: string = "", genres: Array<String> = [], image:Array<String>=[]
    ){
        this.id = id;
        this.title = title;
        this.year = year;
        this.lang = lang;
        this.genres = genres;
        this.image = image;
    }

}
