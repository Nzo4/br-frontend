import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
  @Input() total!: number;
  @Input() limit!: number;
  @Input() currentPage = 1;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    this.pages = this.pagesCalculated(Math.ceil(this.total / this.limit));
    console.log(this.pages);
  }

  pagesCalculated(pagesLength: number) {
    return new Array(pagesLength).fill(0).map((_, index) => index + 1);
  }
  onPageClick(page: number): void {
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }
}
