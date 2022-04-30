import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCandidateDataComponent } from './components/add-candidate-data/add-candidate-data.component';
import { CandidateDataTableComponent } from './components/candidate-data-table/candidate-data-table.component';

const routes: Routes = [
  
  {path: 'adddata', component: AddCandidateDataComponent},
  {path: 'candidatedata', component: CandidateDataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
