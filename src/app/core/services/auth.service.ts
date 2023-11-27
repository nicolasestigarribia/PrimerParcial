import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { lastValueFrom } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api : ApiService) { }


  public async AuthUser(email:string, pass :string) : Promise<boolean>
  {
    let user : User[] = [];
    try {
      
      let apiResponse =this.api.getUserToAuth(email, pass);
      user = await lastValueFrom(apiResponse);
      console.log(user[0])
    } catch (error) {
      console.log(Error)
    }
    return user.length == 1;
  }
}
