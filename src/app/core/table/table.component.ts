import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableColumnData: any;
  @Input() tableData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.tableColumnData, this.tableData);
  }

}
