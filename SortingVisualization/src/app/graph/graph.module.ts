import { NgModule } from '@angular/core';
import { DropdownModule } from "ngx-dropdown";
import { MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './graph.component'

@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    ChartsModule,
    DropdownModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
