import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from '../../shared/data/portfolio-data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public hiddenProj = false; 
  readonly projects = PROJECTS;
}
