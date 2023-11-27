export interface IProducto {
    id : number;
    description : string | null;
    price : number | null;
    stock : number | null;
}

export interface IUser
{
    id: number;
    name :  string;
    lastname : string;
    mail : string;
    password: string;
    birthdate : string;
}