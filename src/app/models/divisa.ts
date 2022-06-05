export class Divisa {
    result!: string;
    toType!:string;
    fromValue!: string;
    fromType!: string;

    constructor(result: string ="", toType: string ="",fromValue: string ="", fromType: string =""){
        this.result = result;
        this.toType = toType;
        this.fromValue = fromValue;
        this.fromType = fromType;
    }

}
