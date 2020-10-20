import { Component, OnInit } from '@angular/core';
import { router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigate(['/home']);
  }

}
