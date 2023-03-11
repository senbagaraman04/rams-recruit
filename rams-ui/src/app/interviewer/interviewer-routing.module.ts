import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerWrapperComponent } from './interviewer-wrapper/interviewer-wrapper.component';
import { InterviewerformComponent } from './interviewerform/interviewerform.component';
 
 
const routes: Routes = [
  {
    path: '', component: InterviewerWrapperComponent,
   children: [
      { path: 'addinterviewer', component: InterviewerformComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
