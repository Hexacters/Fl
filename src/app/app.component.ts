import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ddata: any;
  Cdata: any;

  constructor() { }

  ngOnInit() {
    this.ddata = [{
      name: 'Venkat',
      DOB: '09-04-1998'
    }];
    this.Cdata = [
      'name',
      'DOB'
    ];
  }
}
