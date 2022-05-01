import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewresponse',
  templateUrl: './interviewresponse.component.html',
  styleUrls: ['./interviewresponse.component.scss']
})
export class InterviewresponseComponent implements OnInit {
   response: string[] = ['Advanced', 'Not Moved'];
   rating: number[] = [1,2,3,4,5];
   expRating;
   interestRating;
   commRating;
   result;

  constructor() { 
   
  }

  ngOnInit(): void {
     //These sample data needs to be updated from the DB
     this.name = "Senbagaraman";
     this.experience = 4;
     this.currentCtC = "4.20";
     this.primarySkills = ["Azure Devops", "AWS", "Google Cloud", "Paytm Cloud"];
  }


  name: string;
  experience: number;
  primarySkills: string[];
  currentCtC: string;

}
