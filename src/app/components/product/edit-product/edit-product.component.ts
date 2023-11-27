import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productoToEdit : Product = new Product

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService : ProductService, private dialogRef: MatDialogRef<EditProductComponent>){
    
  }

  ngOnInit(): void {
    this.productoToEdit = {...this.data}
  }

  public async editProduct()
  {
    try {
      const resp = await this.productService.editProduct(this.productoToEdit)
      if(resp)
      {
        this.dialogRef.close(true)
      }  
    } catch (error) {
      console.log("NO SE PUDO EDITAR");
    }
  }

}
