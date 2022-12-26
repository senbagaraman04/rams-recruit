/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanidateDataServiceService } from '../services/canidate-data-service.service';

@Component({
  selector: 'app-addcandidateform',
  templateUrl: './addcandidateform.component.html',
  styleUrls: ['./addcandidateform.component.scss']
})
export class AddcandidateformComponent implements OnInit {
  myForm!: FormGroup;
  showForm: boolean = true;


  constructor(private fb: FormBuilder, private candidateDataService: CanidateDataServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      yoe: ["", Validators.required],
      tech: ["", Validators.required],
      gender: ['', Validators.required]
    });

    this.showForm = true;
  }


  //TODO:
  onSubmit(): void {
    console.log(this.myForm);
     this.candidateDataService.addCandidateData(this.myForm.value).subscribe(res=>{

     });
    this.showForm = false;
  }

  onBackBtn(): void {
    this.showForm = true;
  }

  onClear() {
    this.myForm.reset()
  }

}
