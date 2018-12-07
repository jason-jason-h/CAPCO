import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any = [];
  @Input() headerData: any = [];
  @Input() paginatorCounterMax: any = 1000;
  @Input() PaginationItemsPerPage: any = 15;
  @ViewChild('dataTableHeader') public dataTableHeader: ElementRef;
  @ViewChild('dataTableBody') public dataTableBody: ElementRef;
  @Output() ifRowClicked = new EventEmitter<any>();
  cols: any[];
  showFromIndex: number;
  showToIndex: number;

  constructor() {}

  ngOnInit() {
    this.showFromIndex = 0;
    this.showToIndex = 15;
    this.checkInit();
  }

  ngOnChanges() {
  }

  checkInit() {
    console.log(
      'Init Table Component'
    );
  }
  parallelScroll($event) {
    const ele = $event.srcElement;
    // Adjust for scrolling: width
    const currentLeftOffset = ele.scrollLeft;
    // Adjust for scrolling: height
    const clientHeight = ele.clientHeight;
    const maxHeight = ele.scrollHeight;
    if (clientHeight < maxHeight) {
      // Account for horizontal scrollbar @17px when scrollbars are active
      this.dataTableHeader.nativeElement.style.paddingRight = '17px';
    }
    this.syncDataTableHeader(currentLeftOffset);
  }

  syncDataTableHeader(offset) {
    this.dataTableHeader.nativeElement.scrollLeft = offset;
  }
  rowClicked(row) {
    this.ifRowClicked.emit(row);
  }

  paginationChange($event) {
    this.showFromIndex = $event.showFromIndex;
    this.showToIndex = $event.showToIndex;
  }
}
