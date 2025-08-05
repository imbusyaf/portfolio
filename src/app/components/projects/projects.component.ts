import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise Dashboard Optimization',
      description: 'Refactored a critical data dashboard, leading to a 40% improvement in load times and a more responsive user experience for handling large datasets.',
      tech: ['Angular', 'RxJS', 'Debouncing', 'Lazy Loading', 'Chart.js'],
      link: '#' // Add GitHub link here
    },
    {
      title: 'Angular Component Library',
      description: 'Developed a set of reusable, themeable, and accessible UI components for internal use, reducing development time for new features by 25%.',
      tech: ['Angular', 'SCSS', 'Storybook', 'Accessibility (A11y)'],
      link: '#' // Add GitHub link here
    }
  ];
}