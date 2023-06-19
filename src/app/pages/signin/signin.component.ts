import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formLogin!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onHandleSubmit() {
    if (this.formLogin.invalid) return;
    this.authService.signin(this.formLogin.value).subscribe({
      next: (user) => {
        alert('Đăng nhập thành công!');
        this.router.navigate(['/'])
      },
      error: ({ error }) => {
        alert((error.message))
      }
    })
  }
}