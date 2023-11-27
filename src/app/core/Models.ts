import { IProducto, IUser } from "./Interface";

export class Product implements IProducto
{
    id: number;
    description: string | null;
    price: number | null;
    stock: number | null;
    
    constructor(product? : Product)
    {
        this.id = product?.id == undefined ? 0 : product.id;
        this.description = product?.description == undefined ? null : product.description;
        this.price = product?.price == undefined ? null : product.price;
        this.stock = product?.stock == undefined ? null : product.stock;
    }
}


export class User implements IUser
{
    id: number;
    name: string;
    lastname: string;
    mail: string;
    password: string;
    birthdate: string;
    

    constructor(user? : User)
    {
        this.id = user?.id == undefined ? 0 : user.id;
        this.name = user?.name == undefined ? "" : user?.name;
        this.lastname = user?.lastname == undefined ? "" : user?.lastname;
        this.mail = user?.mail == undefined ? "" : user?.mail;
        this.password = user?.password == undefined ? "" : user?.password;
        this.birthdate = user?.birthdate == undefined ? "" : user?.birthdate;
    }
}