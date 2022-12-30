import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InterviewerDataServiceService } from '../services/interviewer-data-service.service';

@Component({
  selector: 'app-interviewerdata',
  templateUrl: './interviewerdata.component.html',
  styleUrls: ['./interviewerdata.component.scss']
})
export class InterviewerdataComponent implements OnInit {
  showButtons:boolean = true;
  myForm!: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder, private intrService: InterviewerDataServiceService) { }

  ngOnInit(): void {
    this.showButtons = true;
  }

  onAddInterviewerClick() {
    this.showButtons = false;
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],      
      techStack: ["", Validators.required]     
    });
  }

  onListInterviewerClick() {
   this.router.navigate(['/interviewerList']);
  }


  onSubmit(){
    this.intrService.addInterviewerData(this.myForm.value).subscribe(res=>{
    //  console.log(res);

     });
  }

  onClear(){
    this.myForm.reset();
  }
}
