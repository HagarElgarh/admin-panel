import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // If the user is already logged in, redirect to the products page
    if (this.authService.currentUserValue) {
      this.router.navigate(['/admin/products/list']);
      return false;
    }
    return true;
  }
}