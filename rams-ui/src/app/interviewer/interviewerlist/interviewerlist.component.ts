import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CanidateDataServiceService } from 'src/app/services/canidate-data-service.service';
import { InterviewerDataServiceService } from 'src/app/services/interviewer-data-service.service';
import { LocaldatastorageService } from 'src/app/services/localdatastorage.service';
import { HOMEPAGE, CANDIDATE, EDIT_CANDIDATE, SLASH } from 'src/app/shared/Constants/redirection-link';
import { Candidate } from 'src/app/shared/Entity/Candidate';

@Component({
  selector: 'app-interviewerlist',
  templateUrl: './interviewerlist.component.html',
  styleUrls: ['./interviewerlist.component.scss']
})
export class InterviewerlistComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public dataSource!: MatTableDataSource<Candidate>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'level',  'skill'];


  constructor(
    public dialog: MatDialog,
    private router:Router,
    private rowDataService: LocaldatastorageService,
    private interviewService: InterviewerDataServiceService) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(undefined);
  }

  ngAfterViewInit(): void {
    this.interviewService.getInterviewerDetails().subscribe(response => {
      console.log(response);
      
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    });
  }

  // /**
  //  * Invoked when the user clicks the name on the table to edit the data
  //  * @param candidateData - Data of the candidate
  //  */
  // onCandidateDataEdit(candidateData: Candidate) {
  //   this.router.navigate([ HOMEPAGE + CANDIDATE + EDIT_CANDIDATE + SLASH + `${candidateData.id}`]);
  // }
}
