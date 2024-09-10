import { Component } from '@angular/core';
import { DownloadFileService } from './servicios/download/download-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema gestión de empleados';

  constructor(private downloadService: DownloadFileService) {}

  download(filename: string): void {
    this.downloadService.downloadFile(filename);
  }
}


