import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Product, User } from '../Models';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL : string = "http://localhost:3000"

  constructor(private http: HttpClient) {
   }

   public getProducts() : Observable<Product[]>
   {
      return this.http.get<Product[]>(`${this.baseURL}/productos`)
   }
   public addProduct(nuevo : Product): Observable<boolean>
   {
    return this.http.post<boolean>(`${this.baseURL}/productos`, nuevo);
   }

   public editProduct(id:number , producto : Product) : Observable<boolean>
   {
    return this.http.put<boolean>(`${this.baseURL}/productos/${id}`,producto);
   }

   public deleteProduct(id:number) : Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseURL}/productos/${id}`).pipe(
      map(resp => true),
      catchError(error => of(false))
      );
   }

   //METODOS DEL USUARIO

   public getUser() : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseURL}/users`)
   }

   public getUserToAuth(mail: string , password : string) : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseURL}/users?mail=${mail}&password=${password}`)
   }

   public addUser(nuevo : User) : Observable<boolean>
   {
    return this.http.post<boolean>(`${this.baseURL}/users`, nuevo);
   }
}
