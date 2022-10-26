import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../_models/login';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private service: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      const userDetails = this.tokenStorage.getUser();
      console.log('userDetails -> ', userDetails);
    }
  }

  onLoginSubmit() {
    console.log(this.loginForm.value);
    this.service
      .login(this.loginForm.value as ILogin)
      .subscribe((data: any) => {
        console.log('login res -> ', data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        location.reload();
      });
  }
}
