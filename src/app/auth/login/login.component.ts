import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serviceS/auth.service';
import { UserI } from 'src/app/interfaces/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
  });

  ngOnInit() {  }
  onLogin(form: UserI) {
    this.authSvc
    .loginByEmail(form)
    .then( res => {
      console.log('Succesfully ', res);
      this.router.navigate(['/event']);
    })
    .catch(err => console.log('Error', err));
  }
}
