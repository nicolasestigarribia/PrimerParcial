import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  @Input() listProduct : Product[] = []
  @Output() deleteProduct : EventEmitter<number> = new EventEmitter();
  @Output() editProduct : EventEmitter<Product> = new EventEmitter(); 

  constructor()
  {
  }

  public delete(id: number)
  {
    this.deleteProduct.emit(id);
  }
  public edit(product : Product)
  {

    this.editProduct.emit(product)
  }
}
