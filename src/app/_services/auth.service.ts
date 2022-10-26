import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/_models/login';

const Base_URL = 'https://stockportfoliobe.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(data: ILogin) {
    return this.httpClient.post(`${Base_URL}/login`, data);
  }
}
