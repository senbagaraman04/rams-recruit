/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { DasboardwrapperComponent } from './dasboardwrapper/dasboardwrapper.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorHttpCatchInterceptor } from './shared/interceptors/error-http-catch.interceptor';
import { MapinterviewComponent } from './mapinterview/mapinterview.component';
 @NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OfferDetailsComponent,
    DasboardwrapperComponent,
    LoginPageComponent,
    MapinterviewComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpCatchInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
