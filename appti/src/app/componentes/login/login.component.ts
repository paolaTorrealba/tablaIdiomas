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
  

  rellenarTester(){
    this.email="tester@tester.com";
    this.password= "555555";  
    localStorage.setItem("email", JSON.stringify(this.email));
    localStorage.setItem("password", JSON.stringify(this.password));
  }
  rellenarAdmin(){
    this.email="admin@admin.com";
    this.password= "111111"; 
    localStorage.setItem("email", JSON.stringify(this.email));
    localStorage.setItem("password", JSON.stringify(this.password));
  }

  rellenarInvitado(){
    this.email="invitado@invitado.com";
    this.password= "222222"; 
    localStorage.setItem("email", JSON.stringify(this.email));
    localStorage.setItem("password", JSON.stringify(this.password));
   
  }
 
  rellenarUsuario(){
    this.email="usuario@usuario.com";
    this.password= "333333"; 
    localStorage.setItem("email", JSON.stringify(this.email));
    localStorage.setItem("password", JSON.stringify(this.password));


  }
  rellenarAnonimo(){
    this.email="anonimo@anonimo.com";
    this.password= "444444"; 
    localStorage.setItem("email", JSON.stringify(this.email));
    localStorage.setItem("password", JSON.stringify(this.password));
  }

  
  
}