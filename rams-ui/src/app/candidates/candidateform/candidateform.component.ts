import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanidateDataServiceService } from 'src/app/services/canidate-data-service.service';

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrls: ['./candidateform.component.scss']
})
export class CandidateformComponent implements OnInit {
  myForm!: FormGroup;
  showForm: boolean = true;


  constructor(private fb: FormBuilder, private candidateDataService: CanidateDataServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      experience: ["", Validators.required],
      techStack: ["", Validators.required],
      gender: ['', Validators.required]
    });

    this.showForm = true;
  }


  //TODO:
  onSubmit(): void {
    console.log(this.myForm);
     this.candidateDataService.addCandidateData(this.myForm.value).subscribe(res=>{
      console.log(res);

     });
    this.showForm = false;
  }

  onBackBtn(): void {
    this.myForm.reset();
    this.showForm = true;
  }

  onClear() {
    this.myForm.reset()
  }

}