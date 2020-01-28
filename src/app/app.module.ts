import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { MainComponent } from './views/main/main.component';
import { FooterComponent } from './views/footer/footer.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDescComponent } from './views/product-desc/product-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductListComponent,
    ProductDescComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
