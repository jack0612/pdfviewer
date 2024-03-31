import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
 import { isLocalhost } from '../common/utilities';
import { NgxExtendedPdfViewerService, PDFNotificationService, PdfThumbnailDrawnEvent } from 'src/projects/ngx-extended-pdf-viewer/src/public_api';

(window as any).updateThumbnailSelection = (page: number) => {
  (window as any).PDFViewerApplication.page = page;
  setTimeout(() => {
    const radiobuttons = document.getElementsByClassName('thumbnail-radiobutton');
    if (radiobuttons) {
      for (let i = 1; i <= radiobuttons.length; i++) {
        const cbx = radiobuttons.item(i - 1) as HTMLInputElement;
        cbx.checked = i === page + 1;
      }
    }
  });
};

@Component({
  selector: 'app-custom-thumbnails',
  templateUrl: './custom-thumbnails.component.html',
  styleUrls: ['./custom-thumbnails.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomThumbnailsComponent {
  private _fullscreen = false;

  public pdfjsVersion!: string;

  public isLocalhost = isLocalhost();

  public get fullscreen(): boolean {
    return this._fullscreen;
  }

  public set fullscreen(full: boolean) {
    this._fullscreen = full;
    setTimeout(() => this.pdfService.recalculateSize());
  }

  constructor(private pdfService: NgxExtendedPdfViewerService, private notification: PDFNotificationService) {
    this.pdfjsVersion = this.notification.pdfjsVersion;
  }

  public onPageChange(page: number): void {
    const radiobuttons = document.getElementsByClassName(
      'thumbnail-radiobutton'
    );
    if (radiobuttons) {
      for (let i = 1; i <= radiobuttons.length; i++) {
        const cbx = radiobuttons.item(i - 1) as HTMLInputElement;
        cbx.checked = i === page + 1;
      }
    }
  }

  public onThumbnailDrawn(thumbnailEvent: PdfThumbnailDrawnEvent): void {
    console.log('Thumbnail drawn ' + thumbnailEvent);
    const thumbnail = thumbnailEvent.thumbnail;
    const page = thumbnailEvent.pageId;

    if (page === (window as any).PDFViewerApplication.page) {
      (window as any).updateThumbnailSelection(page);
    }

    const overlay = thumbnail.querySelector('.image-container') as HTMLElement;
    let type: string;
    if (page <= 2) {
      overlay.style.backgroundColor = '#0000FF40';
      type = 'title page';
    } else if (page === 3 || page === 4) {
      overlay.style.backgroundColor = '#00FF0040';
      type = 'table of contents';
    } else {
      overlay.style.backgroundColor = '#FF000040';
      type = 'ready for review';
    }
    const textNode = thumbnail.querySelector(".thumbnail-text") as HTMLDivElement;
    if (textNode) {
      textNode.innerText=type;
    }
  }
}
