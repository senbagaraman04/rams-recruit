import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CanidateDataServiceService } from 'src/app/services/canidate-data-service.service';

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrls: ['./candidateform.component.scss']
})
export class CandidateformComponent implements OnInit {
  candidateForm!: FormGroup;
  showForm: boolean = true;
  id!: string;


  constructor(private fb: FormBuilder, private candidateDataService: CanidateDataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createCandidateForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id') !== null){
        this.id = params.get('id') as string;
      }
    });

    this.showForm = true;

    if(this.id !== null){
      console.log("Form is in editing state");
      this.patchValues();
    }

    //console.log(this.id)
  }
  patchValues() {
   this.candidateDataService.getCandidateData(this.id).subscribe(data=>{
console.log(data)
   });

  }


  private createCandidateForm() {
    this.candidateForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      experience: ["", Validators.required],
      techStack: ["", Validators.required],
      gender: ['', Validators.required]
    });
  }

  //TODO:
  onSubmit(): void {
    console.log(this.candidateForm);
     this.candidateDataService.addCandidateData(this.candidateForm.value).subscribe(res=>{
      console.log(res);

     });
    this.showForm = false;
  }

  onBackBtn(): void {
    this.candidateForm.reset();
    this.showForm = true;
  }

  onClear() {
    this.candidateForm.reset()
  }

}