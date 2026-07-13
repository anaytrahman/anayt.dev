import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

/**
 * Adds the `reveal` class immediately and toggles `in-view` once the host
 * element scrolls into the viewport. Pairs with the `.reveal` / `.in-view`
 * keyframe utility classes defined in styles/_animations.scss.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'in-view');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
