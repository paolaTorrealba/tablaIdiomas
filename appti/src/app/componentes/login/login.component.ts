import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { timer } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  email: string;
  password: string;
  
  showSplash = true;
  constructor(private authService: AuthService, private formB: FormBuilder) {


   }

  ngOnInit() { 
    timer(3000).subscribe(() => this.showSplash = false)
  }

  onSubmitLogin(){
   console.log("login");
   console.log(this.email);
    this.authService.login(this.email, this.password);
  }
  

  rellenarDatos(){
    this.email="tester@gmail.com";
    this.password= "555555";  
  }
  
}