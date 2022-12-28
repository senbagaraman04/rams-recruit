/**
 * https://github.com/senbagaraman04/rams-recruit
 */

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
import { RamsrecruitdasboardComponent } from './ramsrecruitdasboard/ramsrecruitdasboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { DasboardwrapperComponent } from './dasboardwrapper/dasboardwrapper.component';
import { InterviewerdataComponent } from './interviewerdata/interviewerdata.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
 @NgModule({
  declarations: [
    AppComponent,
    CardsComponentComponent,
    AddcandidateformComponent,
    CandidatelistComponent,
    RamsrecruitdasboardComponent,
    HomepageComponent,
    OfferDetailsComponent,
    DasboardwrapperComponent,
    InterviewerdataComponent,
    InterviewerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule, 
    MatGridListModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
