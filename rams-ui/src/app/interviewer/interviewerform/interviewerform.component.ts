import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-interviewerform',
  templateUrl: './interviewerform.component.html',
  styleUrls: ['./interviewerform.component.scss']
})
export class InterviewerformComponent implements OnInit {

  intrForm: FormGroup = new FormGroup({});

  formData: any = {
    interviewName: {
      name: 'Interviewer Name',
      validators: [Validators.required]
    },
    primarySkill: {
      name: 'Primary Skill',
      validators: [Validators.required]
    },
    interviewRounds: {
      name: 'Interview Levels',
      validators: [Validators.required]
    }
  }

  controls: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createInterviewerForm()
  }

  createInterviewerForm() {
    this.controls = Object.keys(this.formData);
    for (const controlName of this.controls) {
      const control: FormControl = new FormControl('')
      this.intrForm.addControl(controlName, control);
    }
  }

  getControlName(key: string) {
    return this.formData[key].name
  }
}
