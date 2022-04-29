/**
 * @author: github.com/senbagaraman04
 * @copyright:  All rights reserved with the author
 * @summary: 
 */


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-candidate-data',
  templateUrl: './add-candidate-data.component.html',
  styleUrls: ['./add-candidate-data.component.scss']
})
export class AddCandidateDataComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.candidateForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      fullname: [null, Validators.required],
      pNumber: [null, Validators.required],
      pSkills: [null, Validators.required],
      experience: [null, Validators.required],
      rCompany: [null, Validators.required],
      currentCtc: [null, Validators.required]
    });
  }


  submit() {
    if (!this.candidateForm.valid) {
      return;
    }
    console.log(this.candidateForm.value);
  }







  candidateForm: FormGroup;

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


}
