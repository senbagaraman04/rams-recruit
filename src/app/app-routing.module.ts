import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCandidateDataComponent } from './components/add-candidate-data/add-candidate-data.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'adddata', component: AddCandidateDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
