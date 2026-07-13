import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  /** Id of the section currently in view, used to highlight the active nav link. */
  readonly activeSection = signal<string>('home');

  private observer?: IntersectionObserver;

  observeSections(sectionIds: string[]): void {
    this.observer?.disconnect();

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.activeSection.set(visible.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-80px 0px -40% 0px' }
    );

    elements.forEach((el) => this.observer?.observe(el));
  }
}
