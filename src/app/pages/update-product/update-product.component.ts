import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/types/Product';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product!: IProduct;
  form = this.fb.group({
    name: [''],
    price: [0]
  })
  constructor(
    private fb: FormBuilder,
    private productSerivce: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productSerivce.getOneProduct(id).subscribe({
        next: (product) => {
          this.product = product
          this.form.patchValue(product)
        },
        error: (errors) => {

        }
      })
    })
  }
  onHandleSubmit() {
    console.log(this.form.value)
    if (this.form.invalid) return;
    this.productSerivce.updateProduct({
      id: this.product.id,
      // name: this.form.value.name || '',
      // price: this.form.value.price || 0
      ...this.form.value
    }).subscribe({
      next: (product) => {
        alert('Cập nhật sản phẩm thành công!');
        this.router.navigate(['/'])
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }
}