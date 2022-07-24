import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CandidatelistDataSource, CandidatelistItem } from './candidatelist-datasource';
import {MatDialog} from '@angular/material/dialog';
import { LocaldatastorageService } from '../services/localdatastorage.service';
import {Observable, Subscribable, take} from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.scss']
})
export class CandidatelistComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CandidatelistItem>;
  dataSource: CandidatelistDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['fullname','email', 'gender','phoneNumber', 'yoe', 'tech', 'interviewResponses'];

    
  constructor(public dialog: MatDialog, private rowDataService: LocaldatastorageService) {
    this.dataSource = new CandidatelistDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  /**
   * Invoked when the user clicks the name on the table to edit the data
   * @param candidateData - Data of the candidate
   */
  onCandidateDataEdit(candidateData: CandidatelistItem) {
   // console.log(candidateData);
   this.rowDataService.clearEvent();
    this.rowDataService.selectionEvent(candidateData);
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {minWidth: '100%' });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog  implements OnInit{

  candidateData!: CandidatelistItem;
  myForm!: FormGroup;
  disabled: boolean = true;
  candidateName: string = "";
  interviewState: string = "";

  constructor(private rowDataService: LocaldatastorageService, private fb: FormBuilder){ }

  ngOnInit(): void {
    this.createTable();
     this.rowDataService.selectedRowData.pipe(take(1)).subscribe(response => {
      console.log(response);
      this.candidateData = response;
     this.populateTableData()
     });
  }


  private createTable(){
    this.myForm = new FormGroup({
      first: new FormControl({value: '', disabled: true}, Validators.required),
      l1Response:new FormControl({value: '', disabled: false}, Validators.required),
      l2Response:new FormControl({value: '', disabled: false}, Validators.required),
      l3Response:new FormControl({value: '', disabled: false}, Validators.required),
    });
  }


  private populateTableData(){
    
      this.myForm.patchValue({first: this.candidateData.fullname });
      this.candidateName = this.candidateData.fullname;
      if(this.candidateData.l1Response){
        this.myForm.patchValue({l1Response: this.candidateData.l1Response });
        this.myForm.get('l1Response')?.disable();
        this.interviewState = "Interview 1 Done"
      }
      if(this.candidateData.l2Response){
        this.myForm.patchValue({l2Response: this.candidateData.l2Response });
        this.myForm.get('l2Response')?.disable();
        this.interviewState = "Interview 1 & 2 Done"
      }
      if(this.candidateData.l3Response){
        this.myForm.patchValue({l3Response: this.candidateData.l3Response });
        this.myForm.get('l3Response')?.disable();
        this.interviewState = "Interview 1 & 2 & 3 Done"
      }

       
  }

  
  
  
}
