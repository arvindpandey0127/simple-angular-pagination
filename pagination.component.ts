import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  @Input() totalRecord: number;
  @Input() current: number;
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();

  totalPage: number = 0;
  pages = [];

  constructor() { 
  }

  ngOnInit() {
    this.totalPage = Math.ceil( this.totalRecord / this.itemsPerPage );
    this.createPage();
  }

  createPage() {
    this.pages = [];
    for(let inc = 1; inc <= this.totalPage; inc ++ ) {
      this.pages.push(inc);
    }
  }

  setPage(currentPage: number, xyz: any) {
    console.log(currentPage);
    this.changePage.emit(currentPage);
  }

}