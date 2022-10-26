import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FinWix';
  isLoggedIn = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tokenStorageService.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
      if (this.isLoggedIn) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
