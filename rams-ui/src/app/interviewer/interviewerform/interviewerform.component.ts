import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InterviewerDataServiceService } from 'src/app/services/interviewer-data-service.service';

@Component({
  selector: 'app-interviewerform',
  templateUrl: './interviewerform.component.html',
  styleUrls: ['./interviewerform.component.scss']
})
export class InterviewerformComponent implements OnInit {

  intrForm: FormGroup = new FormGroup({});

  formData: any = {
    name: {
      name: 'Interviewer Name',
      validators: [Validators.required]
    },
    skill: {
      name: 'Primary Skill',
      validators: [Validators.required]
    },
    level: {
      name: 'Interview Levels',
      validators: [Validators.required]
    }
  }

  controls: any[] = [];

  constructor(private interviewService: InterviewerDataServiceService ) { }

  ngOnInit(): void {
    this.createInterviewerForm();
  }

  createInterviewerForm() {
    this.controls = Object.keys(this.formData);
    for (const controlName of this.controls) {
      const control: FormControl = new FormControl('');
      this.intrForm.addControl(controlName, control);
    }
  }

  getControlName(key: string) {
    return this.formData[key].name
  }

  onSubmit() {
    
    this.interviewService.addInterviewerData(this.intrForm.value).subscribe(d=>{
      console.log(d)
     });
  }

  onClear() {
    
  }
}
