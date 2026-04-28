import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    apiUrl = 'https://localhost:7273/api/Auth/login';
    apiUrlStud = 'https://localhost:7273/api/Student'


    private http = inject(HttpClient);

    login(data:any){
      return this.http.post(this.apiUrl,data)
    }

    

    getStudents(){
     const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
      });
      return this.http.get(this.apiUrlStud);
    }

    addStudent(data:any){
       const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
      });

      return this.http.post(`this.apiUrlStud`,data);

    }
}
