/**
 * @author: github.com/senbagaraman04
 * @copyright:  All rights reserved with the author
 * @summary: 
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interviewresponse',
  templateUrl: './interviewresponse.component.html',
  styleUrls: ['./interviewresponse.component.scss']
})
export class InterviewresponseComponent implements OnInit {
  
   


  constructor(private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
     //These sample data needs to be updated from the DB
     this.name = "Senbagaraman";
     this.experience = 4;
     this.currentCtC = "4.20";
     this.primarySkills = ["Azure Devops", "AWS", "Google Cloud", "Paytm Cloud"];

     this.loadInterviewerForm();
  }


  loadInterviewerForm() {
    this.myGroup = new FormGroup({
      interviewerName: new FormControl(),
      doi: new FormControl(),
      interviewQuestions: new FormControl(),
      result: new FormControl(),
      techExperience: new FormControl(),
      verbalCommunication: new FormControl()
  }); 
  }

  saveDetails(form) {
    console.log(form);
    console.log(this.myGroup.getRawValue());
  }


  name: string;
  experience: number;
  primarySkills: string[];
  currentCtC: string;
  response: string[] = ['Advanced', 'Not Moved'];
  rating: number[] = [1,2,3,4,5];
  expRating;
  interestRating;
  commRating;
  result;
   myGroup: FormGroup;

}
