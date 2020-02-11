import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'login-box-component',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss'],
})
export class LoginBoxComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(
    protected loginService: LoginService,
    protected router: Router
  ) {}

  updateValue(event) {
    this.user[event.key] = event.value;
  }

  login() {
    this.loginService.authenticate(this.user).subscribe(res => {
      if (res) {
        this.router.navigate(['list']);
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
