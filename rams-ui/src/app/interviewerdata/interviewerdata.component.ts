import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviewerdata',
  templateUrl: './interviewerdata.component.html',
  styleUrls: ['./interviewerdata.component.scss']
})
export class InterviewerdataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddInterviewerClick() {
   this.router.navigate(['/addinterviewer']);
  }

  onListInterviewerClick() {
   this.router.navigate(['/interviewerList']);
  }
}
