import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { AddcandidateformComponent } from './addcandidateform/addcandidateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponentComponent,
    AddcandidateformComponent,
    CandidatelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule, FormsModule, ReactiveFormsModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
