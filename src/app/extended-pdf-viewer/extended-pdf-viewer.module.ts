import { NgModule } from '@angular/core';

// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedModule } from '../shared/shared.module';



import { CustomThumbnailsComponent } from './custom-thumbnails/custom-thumbnails.component';



import { ExtendedPdfViewerRoutingModule } from './extended-pdf-viewer-routing.module';




import { SimpleComponent } from './simple/simple.component';
import { NgxExtendedPdfViewerModule } from 'src/projects/ngx-extended-pdf-viewer/src/lib/ngx-extended-pdf-viewer.module';


@NgModule({
  imports: [ExtendedPdfViewerRoutingModule, SharedModule, 
    NgxExtendedPdfViewerModule],

  declarations: [





    CustomThumbnailsComponent,










    SimpleComponent,




  ],
})
export class ExtendedPdfViewerModule { }
