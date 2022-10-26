import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!this.tokenStorageService.getToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
