import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public userArray;
  public isValid = false;
  constructor(private router: Router) {
    this.userArray = [{ user: 'abc', pass: '12345' }];
  }

  ngOnInit(): void {}

  public login() {
    console.log(this.username);
    console.log(this.password);
    for (let i = 0; i < this.userArray.length; i++) {
      if (
        this.username === this.userArray[i].user &&
        this.password === this.userArray[i].pass
      ) {
        this.router.navigate(['/shop']);
        this.isValid = true;
        console.log('Login Success');
      } else {
        console.log('Login Failed');
      }
    }
  }

  public register() {
    this.userArray.push({ user: this.username, pass: this.password });
    this.router.navigate(['/shop']);
    this.isValid = true;
    console.log(this.userArray);
  }
}
