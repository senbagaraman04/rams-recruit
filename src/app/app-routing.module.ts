import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcandidateformComponent } from './addcandidateform/addcandidateform.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  {path: '', component: HomepageComponent,
  children: [
     { path: 'dashboard', component: AddcandidateformComponent},
     {path: 'candidateList', component: CandidatelistComponent},
     {path:'releasedoffers', component: OfferDetailsComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
