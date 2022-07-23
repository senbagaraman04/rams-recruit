import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcandidateformComponent } from './addcandidateform/addcandidateform.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent,
  children: [
     { path: 'dashboard', component: AddcandidateformComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
