import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() { }

  downloadFile(filename: string): void {
    const filePath = `./assets/files/${filename}`; // Ruta del archivo en la carpeta "assets/files"
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
