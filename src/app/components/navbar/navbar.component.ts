import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    CommonModule,
    ToggleComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
