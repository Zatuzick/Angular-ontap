import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  product!: IProduct[];

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.product = data;
      },
      error: () => {

      }
    })
  }
  removeItem(id: number) {
    const confirm = window.confirm("Có chắc muốn xóa?");
    if (!confirm) return;
    this.productService.removeProduct(id).subscribe({
      next: () => {
        this.product = this.product.filter(item => item.id !== id)
      },
      error: (error) => {
        // console.log(error);

      }
    })
  }


}
