import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-checkbox-renderer',
  templateUrl: './checkbox-renderer.component.html',
  styleUrls: ['./checkbox-renderer.component.scss']
})
export class CheckboxRendererComponent implements OnInit, ICellRendererAngularComp  {
  public params: any;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    console.log(params);
      this.params = params;
  }

  refresh(): boolean {
      return false;
  }
}
