import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { SOCIAL_LINKS } from "../../shared/data/portfolio-data";
import { APP_FILES } from "../../shared/constants/constants";
import { FileDownloadService } from "../../shared/services/file-download.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly socialLinks = SOCIAL_LINKS;

  private readonly roles = [
    "Frontend Developer",
    "Angular / React Developer",
    "UI/UX Focused Engineer",
    "Performance Optimizer",
  ];
  readonly typedText = signal("");

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;
  constructor(private _fileDownloadService: FileDownloadService) {}
  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private type(): void {
    const currentRole = this.roles[this.roleIndex];
    const speed = this.isDeleting ? 40 : 90;

    if (!this.isDeleting) {
      this.charIndex++;
      this.typedText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), 1400);
        return;
      }
    } else {
      this.charIndex--;
      this.typedText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timeoutId = setTimeout(() => this.type(), speed);
  }
  /**download resume */
  downloadResume(): void {
   
    this._fileDownloadService.download(APP_FILES.RESUME, "Anayt_Resume.pdf");
  }
}
