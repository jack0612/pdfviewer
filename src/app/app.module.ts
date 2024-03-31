import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AppCommonModule } from './app.common.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,


  ],
  imports: [
    AppCommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
