import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerWrapperComponent } from './interviewer-wrapper/interviewer-wrapper.component';
import { InterviewerformComponent } from './interviewerform/interviewerform.component';
import { InterviewerlistComponent } from './interviewerlist/interviewerlist.component';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InterviewerWrapperComponent,
    InterviewerformComponent,
    InterviewerlistComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatIconModule, 
  ]
})
export class InterviewerModule { }
