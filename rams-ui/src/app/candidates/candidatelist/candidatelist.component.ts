/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CanidateDataServiceService } from 'src/app/services/canidate-data-service.service';
import { LocaldatastorageService } from 'src/app/services/localdatastorage.service';
import { Candidate } from 'src/app/shared/Entity/Candidate';



@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.scss']
})
export class CandidatelistComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   dataSource!: MatTableDataSource<Candidate>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'email', 'gender', 'phoneNumber', 'experience', 'tech', 'interviewResponses'];


  constructor(
    public dialog: MatDialog,
    private router:Router,
    private rowDataService: LocaldatastorageService,
    private candidateService: CanidateDataServiceService) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(undefined);
  }

  ngAfterViewInit(): void {
    this.candidateService.getAllCandidates().subscribe(response => {
      console.log(response);
      
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    });
  }

  /**
   * Invoked when the user clicks the name on the table to edit the data
   * @param candidateData - Data of the candidate
   */
  onCandidateDataEdit(candidateData: Candidate) {
    this.router.navigate([`/candidate/editcandidate/${candidateData.id}`]);
  }
}


