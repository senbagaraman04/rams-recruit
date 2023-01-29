/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candidate } from '../shared/Entity/Candidate';

@Injectable({
  providedIn: 'root'
})
export class LocaldatastorageService {
  private rowDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public selectedRowData: Observable<Candidate> = this.rowDataSource.asObservable();

    constructor() {
       
        // if (localStorage.getItem('rowData') !== null) {
        //     this.rowDataSource.next(JSON.parse(localStorage.getItem('rowData') as string));
        // }
    }

    /**
     * Method to store the candidate data in the localstorage
     * @param rowData - Candidate data from the table
     */
    storeCandidateData(rowData: any) {
      if(rowData){
        this.rowDataSource.next(rowData);
      }
       
    }

    /**
     * Clears all the data from the localstorage
     */
    clearEvent(){
       
      localStorage.clear();
    }

  }