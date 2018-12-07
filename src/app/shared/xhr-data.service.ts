import { Injectable } from '@angular/core';
// import { post } from 'selenium-webdriver/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Table } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class XhrDataService {
  dataUrl = './assets/sample_data.json';
  // Sample post URL
  postUrl = 'http://httpbin.org/post';

  constructor(private http: HttpClient) {}

  getData(url) {
    console.log('Get Data');
    return this.http.get<Table[]>(url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  postData(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'some-auth-data'
      })
    };
    console.log('Posting: ', this.postUrl, data, httpOptions);
    return this.http.post(this.postUrl, data, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}
