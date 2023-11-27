import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email : string = ""
  public password : string = ""

  constructor(private authService : AuthService,private router : Router)
  {

  }

  public async login()
  {
    let rta = this.authService.AuthUser(this.email, this.password);
    console.log(this.email)
    if (await rta) {
      this.router.navigate(['/home']);
    }else{
      alert("No existe el usuario")
    }
  }
}
