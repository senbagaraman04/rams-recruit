import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
 import { CandidateformComponent } from './candidateform/candidateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CandidatesComponent } from './candidate-wrapper/candidates.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateformComponent,
    CandidatelistComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, 
  ]
})
export class CandidatesModule { }
