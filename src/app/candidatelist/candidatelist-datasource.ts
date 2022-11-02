/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface CandidatelistItem {
  fullname: string,
  email:string,
  phoneNumber: string,
  yoe: string,
  tech: string,
  gender: string
  l1Response?:string;
  l2Response?:string;
  l3Response?: string;
  cleared?:boolean;
}

const EXAMPLE_DATA: CandidatelistItem[] = [
  {
    fullname: "candidate1",
    email: "candidate@test.com",
    phoneNumber: "9000000001",
    yoe: "1", gender: "male",
    tech: "Full Stack Java",
    l1Response:"Taken by Mr.XSD. Candidate is good in Angular/Vue.js and Java",
    l2Response:"Taken by Ms.JSD. Candidate is good in design principles",
    l3Response:"Taken by Mr.OJK. Cleared. Start offer process",
    cleared: true
  },
  {
    fullname: "candidate2",
    email: "candidate2@test.com",
    phoneNumber: "9000000002",
    yoe: "2",
    gender: "Female",
    tech: "Full Stack .net",
    l1Response: "Taken by Mr.WWS. Candidate is good in Angular/React.js and net",
  },
  {
    fullname: "candidate3",
    email: "candidate3@test.com",
    phoneNumber: "9000000003",
    yoe: "3",
    gender: "male",
    l1Response: "Taken by Mr.2ws. Candidate is good in Angular/Vue.js and Java",
    l2Response: "Taken by Ms.fde. Candidate is not good in design principles",
    tech: "Testing"
  },
  { fullname: "candidate4", email: "candidate4@test.com", phoneNumber: "9000000004", yoe: "4", gender: "Female", tech: "Full Stack .net" },
  { fullname: "candidate5", email: "candidate5@test.com", phoneNumber: "9000000005", yoe: "5", gender: "male", tech: "Java" },

];

/**
 * Data source for the Candidatelist view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CandidatelistDataSource extends DataSource<CandidatelistItem> {
  data: CandidatelistItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CandidatelistItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

/**
 * Returns the number of candidate profiles received and added to the application.
 * @returns number of candidate profiles received
 */
  getCandidateCount(): number {

    return this.data.length;
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CandidatelistItem[]): CandidatelistItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CandidatelistItem[]): CandidatelistItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'fullname': return compare(a.fullname, b.fullname, isAsc);
        case 'yoe': return compare(a.yoe, b.yoe, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
