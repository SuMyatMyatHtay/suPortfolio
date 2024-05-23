import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {
  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}
