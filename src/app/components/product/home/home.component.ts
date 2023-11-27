import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/Models';
import { ProductService } from 'src/app/core/services/product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  lista : Product[] = []

  constructor(private productoService : ProductService, private dialog : MatDialog)
  {
  }
  
  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

  public async getProducts()
  {
    this.lista  = await this.productoService.getProducts();
    console.log(this.lista);
  }

  public async addProduct(product : Product){
    
    if(product.description != null && product.price != null && product.stock != null)
    {
      
      var rta = await this.productoService.addProduct(product);
      if(rta)
      {
        alert("Se agrego el producto con exito");
        await this.getProducts()
      }

    }else{
      console.log("no entre")
    }
  }

  public async deleteProduct(id : number)
  {
    if(id != null && id > 0){
      var rta = await this.productoService.deleteProduct(id);
      if(rta)
      {
        alert("Se elimino el producto con exito");
        await this.getProducts()
      }
    }
  }

  public editProduct(product : Product)
  {
    console.log(product)
    if (product != null) {
      const dialogResult = this.dialog.open(EditProductComponent, {data : product, height: '450px', width: '460px'})
      dialogResult.afterClosed().subscribe(result => this.getProducts())
    }
  }

}
