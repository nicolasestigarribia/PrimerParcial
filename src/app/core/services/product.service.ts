import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../Models';
import { last, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private api : ApiService) { }



  public async getProducts() : Promise<Product[]>
  {
    let listaProductos : Product[] = []
    try {
      var response = this.api.getProducts()
      listaProductos = await lastValueFrom(response);

    } catch (error) {
      console.log(`Error al obtener productos : ${error}` )
    }   

    return listaProductos;
  }

  public async addProduct(nuevo : Product) : Promise<boolean>
  {
    let rta : boolean = false
    try{
      var response = this.api.addProduct(nuevo);
      rta = await lastValueFrom(response);
    }catch(error){
      console.log(`Error al agregar produco : ${error}` )
    }
    return rta;
  }

  public async deleteProduct(id : number) : Promise<boolean>
  {
    let rta : boolean = false;
    try {
      var response = await this.api.deleteProduct(id);
      rta = await lastValueFrom(response)
    }catch(error)
    {
      console.log(`Error al eliminar un producto : ${error}` )
    }
    return rta
  } 

  public async editProduct(product : Product) : Promise<boolean>{
    let rta : boolean = false;
    try {
      var response = await this.api.editProduct(product.id,product);
      rta = await lastValueFrom(response)
      
    } catch (error) {
      console.log(`Error al editar un producto : ${error}` )
    }
    return rta
  }
}
