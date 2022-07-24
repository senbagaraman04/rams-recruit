import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaldatastorageService {
  private rowDataSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedRowData: Observable<any> = this.rowDataSource.asObservable();

    constructor() {
       
        if (localStorage.getItem('rowData') !== null) {
            this.rowDataSource.next(JSON.parse(localStorage.getItem('rowData') as string));
        }
    }

    /**
     * Method to store the candidate data in the localstorage
     * @param rowData - Candidate data from the table
     */
    selectionEvent(rowData: any) {
      if(rowData){
        localStorage.setItem('rowData', JSON.stringify(rowData));
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