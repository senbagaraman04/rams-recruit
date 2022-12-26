/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { Component, OnInit } from '@angular/core';
import { CandidatelistItem } from './candidatelist-datasource';
import { LocaldatastorageService } from '../services/localdatastorage.service';
import { take } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './dialog-content-dialog.html',
})
  export class DialogContentDialog implements OnInit {
  
    candidateData!: CandidatelistItem;
    myForm!: FormGroup;
    disabled: boolean = true;
    candidateName: string = "";
    interviewState: string = "";
  
    constructor(private rowDataService: LocaldatastorageService, private fb: FormBuilder) { }
  
    ngOnInit(): void {
  
      this.createTable();
      this.rowDataService.selectedRowData.pipe(take(1)).subscribe(response => {
        console.log(response);
        this.candidateData = response;
        this.populateTableData()
      });
  
  
  
    }
  
    onCancelClick() {
      console.log("cancel...")
    }
  
    onSubmitClick() {
      console.log("submit....");
      console.log(this.myForm);
    }
  
  
    private createTable() {
  
      this.myForm = new FormGroup({
        first: new FormControl({ value: '', disabled: true }, Validators.required),
        l1Response: new FormControl({ value: '', disabled: false }, Validators.required),
        l2Response: new FormControl({ value: '', disabled: false }, Validators.required),
        l3Response: new FormControl({ value: '', disabled: false }, Validators.required),
      });
    }
  
  
    private populateTableData() {
  
      this.myForm.patchValue({ first: this.candidateData.fullname });
      this.candidateName = this.candidateData.fullname;
      if (this.candidateData.l1Response) {
        this.myForm.patchValue({ l1Response: this.candidateData.l1Response });
        this.myForm.get('l1Response')?.disable();
        this.interviewState = "Interview 1 Done"
      }
      if (this.candidateData.l2Response) {
        this.myForm.patchValue({ l2Response: this.candidateData.l2Response });
        this.myForm.get('l2Response')?.disable();
        this.interviewState = "Interview 1 & 2 Done"
      }
      if (this.candidateData.l3Response) {
        this.myForm.patchValue({ l3Response: this.candidateData.l3Response });
        this.myForm.get('l3Response')?.disable();
        this.interviewState = "Interview 1 & 2 & 3 Done"
      }
  
    }
  
  }
  