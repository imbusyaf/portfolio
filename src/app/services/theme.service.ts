// src/app/services/theme.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Use a signal to hold the dark mode state
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Check for saved theme in localStorage on initialization
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      this.isDarkMode.set(JSON.parse(savedTheme));
      this.updateTheme();
    }
  }

  toggleTheme() {
    // Toggle the signal's value
    this.isDarkMode.update(value => !value);
    // Update the theme and save the preference
    this.updateTheme();
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode()));
  }

  private updateTheme() {
    if (this.isDarkMode()) {
      // Add 'dark' class to the <html> element
      document.documentElement.classList.add('dark');
    } else {
      // Remove 'dark' class from the <html> element
      document.documentElement.classList.remove('dark');
    }
  }
}