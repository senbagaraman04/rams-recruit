import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponentComponent implements OnInit {

  date = new Date().toLocaleDateString();
  profilesShortlisted: number = 0;
  shortlistedInterview: number =0;
  constructor() { 

  }

  ngOnInit(): void {

    this.profilesShortlisted = 12;
    this.shortlistedInterview = 11;
  }

}
