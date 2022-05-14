import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateDataService {
  serverUrl: string = environment.baseURL;

  constructor(private httpClient:HttpClient) { }
 

  addCandidateData(url: string, data: any): Observable<any> {
    console.log(url);
    console.log(data);
    return this.httpClient.post(this.serverUrl + url, data);
  }

}
