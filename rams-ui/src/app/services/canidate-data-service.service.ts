/**
 * https://github.com/senbagaraman04/rams-recruit
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../shared/Candidate';

/**
 * Service for all candidate related operations
 */
@Injectable({
  providedIn: 'root'
})
export class CanidateDataServiceService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  /**
   * returns the list of all candidates
   * @returns candidatelist
   */
  getAllCandidates(): Observable<any>{
    return this.http.get(this.url+"/getallcandidates");
  }

/**
 * Adds the candidate data to the backend.
 * @param candidateData Data to be added
 * @returns 
 */
  addCandidateData(candidateData: Candidate) {
    
    return this.http.post(this.url+"/addCandidates", JSON.stringify(candidateData));
  }

  


}
