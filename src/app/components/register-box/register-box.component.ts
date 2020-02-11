import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'register-box-component',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss'],
})
export class RegisterBoxComponent {
  user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  };

  constructor(
    protected loginService: LoginService,
    protected router: Router
  ) {}

  updateValue(event) {
    this.user[event.key] = event.value;
  }

  register() {
    this.loginService.register(this.user).subscribe(res => {
      if (res) {
        this.router.navigate(['list']);
      }
    });
  }

  back() {
    this.router.navigate(['login']);
  }
}
