/**
 * https://github.com/senbagaraman04/rams-recruit
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'rams-recruitment';

  constructor(private router:Router){
    
  }
  
  ngOnInit(){
    this.router.navigate(['/login']);
  }
}
