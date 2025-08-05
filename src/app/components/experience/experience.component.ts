import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Frontend Lead',
      company: 'Lentra',
      duration: 'Sep 2023 - Present',
      description: 'Promoted to lead frontend development initiatives, mentor team members, and architect scalable UI solutions.',
      highlights: [
        'Orchestrated seamless migrations from Angular v8 up to v17.',
        'Championed security best practices, including OWASP recommendations.',
        'Mentored 8 junior developers, improving team velocity and code quality.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Lentra',
      duration: 'Oct 2020 - Sep 2023',
      description: 'Developed and maintained complex user interfaces for enterprise-level financial products.',
      highlights: [
        'Slashed UI defects by 60% by establishing robust unit and E2E testing.',
        'Enhanced dashboard performance by 40% through advanced optimization techniques.',
        'Collaborated with cross-functional teams to deliver high-quality features.'
      ]
    }
  ];
  activeIndex: number | null = 0;

  toggleExperience(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}