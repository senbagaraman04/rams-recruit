import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'home', component: HomepageComponent,

    children: [
      {
        path: 'candidate',
        loadChildren: () => import('./candidates/candidates.module').then((m => m.CandidatesModule))
      },
      {
        path: 'interviewer',
        loadChildren: () => import('./interviewer/interviewer.module').then((m => m.InterviewerModule))
      },
      // { path: 'candidateList', component: CandidatelistComponent },
      // { path: 'releasedoffers', component: OfferDetailsComponent },
      // { path: 'interviewer', component: InterviewerdataComponent},
      // { path: 'interviewerList', component: InterviewerListComponent},


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
