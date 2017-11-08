import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './core/navbar/navbar.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PageNotFoundComponent } from './page-not-found.component'

import { AppRoutingModule } from "./app-routing.module"
import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NavbarModule,
    ItemModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
