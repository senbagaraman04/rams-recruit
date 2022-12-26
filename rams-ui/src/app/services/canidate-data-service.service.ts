/**
 * https://github.com/senbagaraman04/rams-recruit
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return this.http.get(this.url+"/allcandidates");
  }

  


}
