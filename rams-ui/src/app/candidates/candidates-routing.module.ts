import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidate-wrapper/candidates.component';
import { CandidateformComponent } from './candidateform/candidateform.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
 
const routes: Routes = [
  {
     path: '', component: CandidatesComponent,
     children:[
      { path: 'addcandidates', component: CandidateformComponent },
      { path: 'viewcandidates', component: CandidatelistComponent},
      { path: 'editcandidate/:id', component: CandidateformComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
