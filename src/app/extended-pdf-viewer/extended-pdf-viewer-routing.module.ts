import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponent,
  },
 

 
  
 
  // { path: 'custom-thumbnails', component: CustomThumbnailsComponent },


  // { path: 'simple', component: SimpleComponent },
 
    
  {
    path: '**',
    redirectTo: 'simple',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtendedPdfViewerRoutingModule {}
