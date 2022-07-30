import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanidateDataServiceService {
  public url = environment.URL;
  constructor(private http: HttpClient) { }

  /**
   * Returns the candidate list for the table
   * @param params 
   * @returns - array of candidate list
   */
  getCandidateData(params: string):Observable<any>{
    
    return this.http.get(this.url+params);
  }
}
