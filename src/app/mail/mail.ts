export class Models {

    id!: number;
    email!:string;
    reciver!:string;
    objet!:string;
    description!:string
    [key: string]: string | number | boolean | any;  // Accepte différents types (string, number, boolean, etc.)
}
