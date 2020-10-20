import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // private variable of router of the type Router
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('test')
    this.router.navigate(['/home']);
  }

}
