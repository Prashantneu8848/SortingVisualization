import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DropdownModule } from "ngx-dropdown";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GraphComponent } from './graph/graph.component';
import { PathFinderComponent } from './path-finder/path-finder.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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
    GraphComponent,
    PathFinderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    DropdownModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
