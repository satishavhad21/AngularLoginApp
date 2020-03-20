import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService} from '../service/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean=false;
  sucess:string ='';

  constructor(
      private formBuilder: FormBuilder,
     
      private authenticationService: AuthenticationService,
  ){}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  
  login():void {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

   
      this.authenticationService.login(this.loginForm.controls.email.value, 
        this.loginForm.controls.password.value)          
          .subscribe(
              data => {
                  this.sucess=data.message;
                 // console.log(this.sucess);
              },
              error => {
                  this.sucess="Login Failed";
              });

              console.log(this.sucess);
  }

  register():void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

 
    this.authenticationService.register(this.loginForm.controls.email.value, 
      this.loginForm.controls.password.value)          
        .subscribe(
            data => {
                this.sucess=data.message;
            },
            error => {
                this.sucess="Registration Failed";
                console.log(JSON.stringify(error))
            });

            console.log(this.sucess);
}

}
