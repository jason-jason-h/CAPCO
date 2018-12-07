import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { TableComponent } from '../shared/table/table.component';
import { XhrDataService } from '../shared/xhr-data.service';

describe('XhrDataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PaginatorComponent,
        TableComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ],
      providers: [HttpClient, XhrDataService],
    }).compileComponents();
  }));


  it('should be created', () => {
    const service: XhrDataService = TestBed.get(XhrDataService);
    expect(service).toBeTruthy();
  });
});
