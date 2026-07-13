import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  download(filePath: string, fileName?: string): void {
    const link = document.createElement('a');

    link.href = filePath;
    if (fileName) {
      link.download = fileName;
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}