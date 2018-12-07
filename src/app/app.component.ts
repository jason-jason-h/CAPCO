import { Component, VERSION, OnInit } from '@angular/core';
import { XhrDataService } from './shared/xhr-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CAPCO Angular Developer Assesment';
  angularVersion: string;
  dataUrl = './assets/sample_data.json';
  data: any;
  postedData: any;
  results: any;
  cols: any[];

  constructor(private dataService: XhrDataService) {
    this.angularVersion = VERSION.full;
  }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' },
      { field: 'company', header: 'Company' },
      { field: 'date_entry', header: 'Date Entry' },
      { field: 'org_num', header: 'Org Num' },
      { field: 'address_1', header: 'Address 1' },
      { field: 'city', header: 'City' },
      { field: 'zip', header: 'Zip Code' },
      { field: 'geo', header: 'GEO' },
      { field: 'pan', header: 'PAN' },
      { field: 'pin', header: 'PIN' },
      { field: 'id', header: 'ID' },
      { field: 'status', header: 'Status' },
      { field: 'fee', header: 'Fee' },
      { field: 'guid', header: 'GUID' },
      { field: 'date_exit', header: 'Exit Date' },
      { field: 'date_first', header: 'Initial Date' },
      { field: 'date_recent', header: 'Recent Date' },
      { field: 'url', header: 'URL' },
      { field: 'action', header: 'Action' },
  ];
  this.fetchData();
  console.log('Init App: CAPCO Angular Developer Assesment');
  console.log('Author: Jason Hodges');
  console.log('Angular v.', this.angularVersion);
}

  fetchData() {
    this.dataService.getData(this.dataUrl).subscribe(data => {
      this.data = data;
    });
  }
  rowClicked($event) {
    const truncateEventData = {'id': $event.id, 'status': $event.status };
    this.postData(truncateEventData);
  }
  postData(payload) {
    this.dataService.postData(payload).subscribe(data => {
       this.postedData = data;
     });
  }

}
