import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  {
    path: 'extended-pdf-viewer',
    loadChildren: () => import('./extended-pdf-viewer/extended-pdf-viewer.module').then(m => m.ExtendedPdfViewerModule)
  },
 
  { path: '**', redirectTo: '/extended-pdf-viewer/simple', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
