import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcandidateformComponent } from './addcandidateform/addcandidateform.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { DasboardwrapperComponent } from './dasboardwrapper/dasboardwrapper.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewerdataComponent } from './interviewerdata/interviewerdata.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    children: [
      { path: 'home', component: DasboardwrapperComponent },
      { path: 'addCandidate', component: AddcandidateformComponent },
      { path: 'candidateList', component: CandidatelistComponent },
      { path: 'releasedoffers', component: OfferDetailsComponent },
      { path: 'interviewer', component: InterviewerdataComponent},
      { path: 'interviewerList', component: InterviewerListComponent}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
