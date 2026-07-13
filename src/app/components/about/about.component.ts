import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly infoItems: InfoItem[] = [
    { icon: 'fa-solid fa-briefcase', label: 'Experience', value: '4+ Years' },
    { icon: 'fa-solid fa-graduation-cap', label: 'Education', value: 'MCA, Computer Science' },
    { icon: 'fa-solid fa-user-tie', label: 'Current Role', value: 'Mid-Senior Frontend Developer' },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Delhi, India' },
  ];
}
