import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardwrapperComponent } from './dasboardwrapper/dasboardwrapper.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewerdataComponent } from './interviewerdata/interviewerdata.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    
    children: [
      { path: 'home', component: LoginPageComponent },
      {
        path: 'candidate',
        loadChildren: () => import('./candidates/candidates.module').then((m => m.CandidatesModule)),      
        
      },
      // { path: 'candidateList', component: CandidatelistComponent },
      { path: 'releasedoffers', component: OfferDetailsComponent },
      { path: 'interviewer', component: InterviewerdataComponent},
      { path: 'interviewerList', component: InterviewerListComponent},
      

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
