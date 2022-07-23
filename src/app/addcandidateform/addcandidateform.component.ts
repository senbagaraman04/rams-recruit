import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcandidateform',
  templateUrl: './addcandidateform.component.html',
  styleUrls: ['./addcandidateform.component.scss']
})
export class AddcandidateformComponent implements OnInit {
  myForm!: FormGroup;
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      yoe: ["", Validators.required],
      tech: ["", Validators.required],
      gender: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    
    console.log(this.myForm.value);
  }

  onClear() {
    //TODO:
  }

}
