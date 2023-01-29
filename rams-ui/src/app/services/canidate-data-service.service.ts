/**
 * https://github.com/senbagaraman04/rams-recruit
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../shared/Entity/Candidate';

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

  getCandidateData(id: any) {
   
    let params = new HttpParams().set("id",id); 

    return this.http.get(this.url+'/getCandidatebyId', { params: params} );
  }

/**
 * Adds the candidate data to the backend.
 * @param candidateData Data to be added
 */
  addCandidateData(candidateData: Candidate) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.url+"/addCandidates", JSON.stringify(candidateData), { headers: headers });
  }

  


}
