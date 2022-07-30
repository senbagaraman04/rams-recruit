import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanidateDataServiceService {
  uri = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  getCandidateData():Observable<any>{
    
    return this.http.get(this.uri+"/candidateList");
  }
}
