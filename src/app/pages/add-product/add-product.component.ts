import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0, [Validators.required]]
  })
  constructor(private productSerivce: ProductService,
    private router: Router,
    private fb: FormBuilder) { }
  onHandleSubmit() {
    if (this.form.invalid) return;
    this.productSerivce.addProduct(this.form.value).subscribe({
      next: (product) => {
        alert('Thêm sản phẩm thành công!');
        this.router.navigate(['/'])
      },
      error: (errors) => {
        console.log(errors)
      }
    })
  }
}