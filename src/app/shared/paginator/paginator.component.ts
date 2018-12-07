import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @ViewChild('paginatorBottom') public paginatorBottom: ElementRef;
  @Input() max: any = 500;
  @Input() length = 1;
  @Input() perPage = 15;
  showFromIndex: number;
  showToIndex: number;
  @Output() paginationAction = new EventEmitter<any>();
  totalPages = 1;
  totalPagesMax = false;
  showPaginator = true;
  loading = true;
  currentPage = 1;
  showForwardButton = true;
  showBackButton = false;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.initialize();
    });
    console.log(
      'Init Pagination Component -- ',
      'Page Counter Max = ',
      this.max,
      'Current Data Length = ',
      this.length,
      'Pagination Default Items Per Page = ',
      this.perPage
    );
  }
  ngOnChanges() {}

  initialize() {
    this.loading = true;
    this.currentPage = 1;
    this.calcNumberOfPages();
    this.isMaxPages();
    this.checkPaginationButtons();
    this.calculateDisplayedIndexes();
    this.paginationChange();
    this.loading = false;
  }

  paginationChange() {
    this.paginationAction.emit({
      showFromIndex: this.showFromIndex,
      showToIndex: this.showToIndex
    });
  }

  toNumber(val) {
    const myRegEx = /[^0-9\d]/i;
    const isValid = !myRegEx.test(val);
    // Catch errant Input entries
    if (isValid) {
      val = val * 1;
      return val;
    } else {
      this.showPaginator = false;
      console.error('Paginator accepts only numbers as Input');
    }
  }

  calcNumberOfPages() {
    const length = this.toNumber(this.length);
    const perPage = this.toNumber(this.perPage);
    let result;
    // Calculate the number of pages
    const resultRounded = Math.round(length / perPage);
    const resultActual = length / perPage;
    // account for discrepancy when rounding down
    if (resultRounded < resultActual) {
      result = resultRounded + 1;
    } else {
      result = resultRounded;
    }
    return result;
  }

  isMaxPages() {
    const length = this.toNumber(this.length);
    const perPage = this.toNumber(this.perPage);
    const max = this.toNumber(this.max);
    this.totalPages = this.calcNumberOfPages();
    // When the number of pages is over the defined (or default) max, change the message
    if (this.totalPages <= max) {
      this.totalPagesMax = false;
    } else {
      console.log('Paginator ---> MAX PAGES REACHED');
      this.totalPagesMax = true;
    }
  }

  updatePagination($event) {
    const ele = $event.srcElement;
    this.perPage = 1 * ele.value;
    this.initialize();
  }

  changePage($event) {
    const ele = $event.srcElement;
    const direction = ele.value;
    switch (direction) {
      case '+': {
        this.incrementCurrentPage();
        break;
      }
      case '-': {
        this.decrimentCurrentPage();
        break;
      }
      default: {
        console.error(
          'Something went wrong while changing pages. Value = ',
          direction
        );
        break;
      }
    }
  }

  incrementCurrentPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    this.calculateDisplayedIndexes();
    this.checkPaginationButtons();
    this.paginationChange();
  }

  decrimentCurrentPage() {
    if (this.currentPage - 1 >= 1) {
      this.currentPage--;
    }
    this.calculateDisplayedIndexes();
    this.checkPaginationButtons();
    this.paginationChange();
  }

  calculateDisplayedIndexes() {
    if (this.currentPage === 1) {
      this.showFromIndex = 0;
    } else {
      this.showFromIndex = (this.currentPage - 1) * this.perPage;
    }

    this.showToIndex = this.showFromIndex + this.perPage;
    // showToIndex should never surpass the length of the data
    if (this.showToIndex > this.length) {
      this.showToIndex = this.length;
    }
    console.log(
      'Paginator---- Show from: ',
      this.showFromIndex,
      ' --> ',
      this.showToIndex - 1
    );
  }

  checkPaginationButtons() {
    // Check forward/backward buttons to disable when required
    if (this.currentPage === this.totalPages) {
      this.showForwardButton = false;
    } else {
      this.showForwardButton = true;
    }
    if (this.currentPage === 1) {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
    }
  }
}
