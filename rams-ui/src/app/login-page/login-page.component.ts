import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/loginservice.service';
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor( private fb: FormBuilder, private loginService:LoginService) {
    
   }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]    
    });
  }

  onLogin() {
    this.loginService.authenticateUser(this.loginForm.value).subscribe(d=>{
      console.log(d)
    })
  }

}
