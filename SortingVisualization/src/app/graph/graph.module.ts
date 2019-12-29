import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GraphComponent } from './graph.component'
@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
})
export class GraphModule { }
