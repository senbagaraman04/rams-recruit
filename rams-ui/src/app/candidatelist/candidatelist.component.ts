/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CandidatelistItem } from './candidatelist-datasource';
import { LocaldatastorageService } from '../services/localdatastorage.service';
import { CanidateDataServiceService } from '../services/canidate-data-service.service';


@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.scss']
})
export class CandidatelistComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CandidatelistItem>;
  dataSource!: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'email', 'gender', 'phoneNumber', 'experience', 'tech'];


  constructor(
    public dialog: MatDialog,
    private rowDataService: LocaldatastorageService,
    private candidateService: CanidateDataServiceService) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(undefined);
  }

  ngAfterViewInit(): void {
    this.candidateService.getAllCandidates().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(response)
    });
  }

  // /**
  //  * Invoked when the user clicks the name on the table to edit the data
  //  * @param candidateData - Data of the candidate
  //  */
  // onCandidateDataEdit(candidateData: CandidatelistItem) {
  //   // console.log(candidateData);
  //   this.rowDataService.clearEvent();
  //   this.rowDataService.selectionEvent(candidateData);
  //   const dialogRef = this.dialog.open(DialogContentDialog, { minWidth: '100%' });
  // }
}


