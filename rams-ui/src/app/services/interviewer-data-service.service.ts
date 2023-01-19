import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Interviewer } from '../shared/Entity/Interviewer';

@Injectable({
  providedIn: 'root'
})
export class InterviewerDataServiceService {
  private url = environment.URL;
  constructor(private http: HttpClient) { }

    
    getInterviewerDetails(): Observable<any>{
      return this.http.get(this.url+"/getInterviewer");
    }
  
   
    addInterviewerData(interviewerData: Interviewer) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

      console.log(JSON.stringify(interviewerData));
  
      return this.http.post(this.url+"/addInterviewer", JSON.stringify(interviewerData), { headers: headers });
    }

    

}
