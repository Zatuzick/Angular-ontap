import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {

  }
  onHandleSubmit() {
    if (this.form.invalid) return;
    this.authService.signup(this.form.value).subscribe({
      next: (user) => {
        alert("Đăng ký thành công!")
        this.router.navigate(['/signin'])
      },
      error: (errors) => {
        console.log(errors.message)
      }
    })
  }
}