import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { TableComponent } from '../table/table.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { XhrDataService } from '../xhr-data.service';
import { AppRoutingModule } from '../../app-routing.module';

describe('TableComponent', () => {
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
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
