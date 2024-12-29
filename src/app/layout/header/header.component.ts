import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName = localStorage.getItem('userName'); // userName user in login form

  constructor(private router: Router) {}

  onLogout(): void {
    // Clear storage
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}