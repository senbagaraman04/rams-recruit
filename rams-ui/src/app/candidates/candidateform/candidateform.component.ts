import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CanidateDataServiceService } from 'src/app/services/canidate-data-service.service';
import { ADD_CANDIDATE, CANDIDATE, HOMEPAGE } from 'src/app/shared/Constants/redirection-link';
import { Candidate } from 'src/app/shared/Entity/Candidate';

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrls: ['./candidateform.component.scss']
})
export class CandidateformComponent implements OnInit {
  candidateForm!: FormGroup;
  showForm: boolean = true;
  id!: string;
  isEdit = false;
  candidateData!: Candidate;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private candidateDataService: CanidateDataServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createCandidateForm();
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') !== null) {
        this.id = params.get('id') as string;
      }
    });

    this.showForm = true;

    if (this.id !== null && this.id !== undefined) {
      console.log("Form is in editing state");
      this.isEdit = true;
      this.patchValues();
    }
  }


  patchValues() {
    this.candidateDataService.getCandidateData(this.id).subscribe(data => this.patchFormValues(data));
  }


  private patchFormValues(data: Candidate) {
    this.candidateData = data;
    this.candidateForm.patchValue({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      experience: data.experience,
      techStack: data.techStack,
      gender: data.gender,
      interviewResponse: data.interviewResponse
    });
  }

  private createCandidateForm() {
    this.candidateForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      experience: ["", Validators.required],
      techStack: ["", Validators.required],
      gender: ['', Validators.required],
      interviewResponse: ['', Validators.required]
    });
  }

  //TODO:
  onSubmit(): void {
    console.log(this.candidateForm.value);

    if(this.isEdit){
      let candidateData = this.candidateForm.value;
      candidateData.id = this.candidateData.id;
    } 
    
    this.candidateDataService.addCandidateData(this.candidateForm.value).subscribe(d=>{
      console.log(d)
     });
   
    this.showForm = false;
  }

  onBackBtn(): void {
    this.candidateForm.reset();
    this.showForm = true;
    this.router.navigate([ HOMEPAGE+CANDIDATE+ADD_CANDIDATE]);
  }

  onClear() {
    this.candidateForm.reset()
  }

}
