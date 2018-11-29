import { Component } from '@angular/core';
import { CheckboxRendererComponent } from './components/checkbox-renderer/checkbox-renderer.component';
import { CheckboxEditorComponent } from './components/checkbox-editor/checkbox-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnDefs = [
    {
      headerName: 'Make',
      field: 'make'
    },
    {
      headerName: 'Model',
      field: 'model',
      editable: true,
      cellRenderer: 'checkboxRenderer',
      cellEditor: 'checkboxEditor',
    },
    {
      headerName: 'Price',
      field: 'price'
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  frameworkComponents = {
    checkboxRenderer: CheckboxRendererComponent,
    checkboxEditor: CheckboxEditorComponent,
  };
}
