import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { RouterModule, Routes } from '@angular/router';


import { DropdownModule } from "ngx-dropdown";
import { MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PathFinderComponent } from './path-finder/path-finder.component';

const appRoutes: Routes = [
  { path: 'sorting', component: GraphComponent },
  { path: 'pathfinder', component: PathFinderComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    PathFinderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    MatSelectModule,
    ChartsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }