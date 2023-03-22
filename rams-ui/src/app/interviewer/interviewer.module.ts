import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerWrapperComponent } from './interviewer-wrapper/interviewer-wrapper.component';
import { InterviewerformComponent } from './interviewerform/interviewerform.component';
import { InterviewerlistComponent } from './interviewerlist/interviewerlist.component';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



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
    MatInputModule
  ]
})
export class InterviewerModule { }
