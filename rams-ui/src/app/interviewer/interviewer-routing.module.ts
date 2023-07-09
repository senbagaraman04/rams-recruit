import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatelistComponent } from '../candidates/candidatelist/candidatelist.component';
import { InterviewerWrapperComponent } from './interviewer-wrapper/interviewer-wrapper.component';
import { InterviewerformComponent } from './interviewerform/interviewerform.component';
import { InterviewerlistComponent } from './interviewerlist/interviewerlist.component';
 
 
const routes: Routes = [
  {
    path: '', component: InterviewerWrapperComponent,
   children: [
      { path: 'addinterviewer', component: InterviewerformComponent },
      { path: 'interviewerlist', component: InterviewerlistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
