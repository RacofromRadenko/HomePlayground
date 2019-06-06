import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGridHolderComponent } from './components/table-grid-holder/table-grid-holder.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BasicThingsComponent } from './components/basic-things/basic-things.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableGridHolderComponent,
    TableHeaderComponent,
    TableBodyComponent,
    MainLayoutComponent,
    BasicThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
