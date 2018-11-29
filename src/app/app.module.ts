import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CheckboxEditorComponent } from './components/checkbox-editor/checkbox-editor.component';
import { CheckboxRendererComponent } from './components/checkbox-renderer/checkbox-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxEditorComponent,
    CheckboxRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CheckboxRendererComponent,
  ]
})
export class AppModule { }
