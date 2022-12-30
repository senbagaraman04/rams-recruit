import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CandidatelistItem } from '../candidatelist/candidatelist-datasource';
import { CanidateDataServiceService } from '../services/canidate-data-service.service';
import { InterviewerDataServiceService } from '../services/interviewer-data-service.service';
import { LocaldatastorageService } from '../services/localdatastorage.service';
import { Candidate } from '../shared/Entity/Candidate';
import { Interviewer } from '../shared/Entity/Interviewer';

@Component({
  selector: 'app-interviewer-list',
  templateUrl: './interviewer-list.component.html',
  styleUrls: ['./interviewer-list.component.scss']
})
export class InterviewerListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   dataSource!: MatTableDataSource<Interviewer>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'email','phoneNumber'];


  constructor(
    public dialog: MatDialog,
    private rowDataService: LocaldatastorageService,
    private intrService: InterviewerDataServiceService) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(undefined);
  }

  ngAfterViewInit(): void {
    this.intrService.getInterviewerDetails().subscribe(response => {
      console.log(response);
      
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    });
  }

 
}



