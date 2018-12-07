import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { TableComponent } from './shared/table/table.component';
import { XhrDataService } from './shared/xhr-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    TableComponent
  ],
  exports: [
    PaginatorComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, XhrDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
