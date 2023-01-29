/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboardwrapper',
  templateUrl: './dasboardwrapper.component.html',
  styleUrls: ['./dasboardwrapper.component.scss']
})
export class DasboardwrapperComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onAddCandidate() {
    this.router.navigate(['/candidate/addcandidates']);
  }

  onDashboardClick() {
    this.router.navigate(['/candidate/viewcandidates']);
  }

}
