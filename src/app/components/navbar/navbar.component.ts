import { CommonModule } from "@angular/common";
import { Component, HostListener, OnInit, signal } from "@angular/core";
import { ScrollSpyService } from "../../shared/services/scroll-spy.service";
import { NAV_LINKS } from "../../shared/data/portfolio-data";
import { APP_FILES } from "../../shared/constants/constants";
import { FileDownloadService } from "../../shared/services/file-download.service";
import { APP_Logo } from "../../shared/file-data/files-data";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  readonly navLinks = NAV_LINKS;
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
public APP_Logo = APP_Logo;
  constructor(
    public scrollSpy: ScrollSpyService,
    private _fileDownloadService: FileDownloadService,
  ) {}

  ngOnInit(): void {
    this.scrollSpy.observeSections(this.navLinks.map((link) => link.fragment));
  }

  @HostListener("window:scroll")
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  isActive(fragment: string): boolean {
    return this.scrollSpy.activeSection() === fragment;
  }

  /**download resume */
  downloadResume(): void {
  
     this._fileDownloadService.download(APP_FILES.RESUME, "Anayt_Resume.pdf");
  }
}
