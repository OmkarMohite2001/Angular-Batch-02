import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../../../core/services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
//  constructor(private router : Router,private http:HttpClient
//   ) {}
  name :string = 'omkar';
    private router = inject(Router);
    // private http = inject(HttpClient);
    private authServ = inject(Auth);
     snackBar = inject(MatSnackBar);


  user = {
    username: '',
    password: '',
  };

  errorMsg = '';
  successMsg = '';
  loading = false;
  onSubmit(form: any) {
    // if(form.valid){
    //   this.http.post('https://localhost:7273/api/Auth/login',this.user).subscribe({
    //     next:(res:any)=>{
    //       console.log('Login Successful',res);
    //       if(res.success){
    //         //token 
    //         localStorage.setItem('token',res.token);
    //         //username
    //         localStorage.setItem('username',res.username);

    //         this.errorMsg = '';
    //          this.router.navigate(['/main-layout/student']);
    //       }
    //     },
    //     error:(err:any)=>{
    //       console.log('Invalid username',err);
    //       this.errorMsg = 'Invalid Username Or Password'+ err.errors;
    //     }
    //   })
    // }
   
        if(form.valid){
          this.loading = true;
     this.authServ.login(this.user).subscribe({
        
        next:(res:any)=>{
          console.log('Login Successful',res);
          this.loading = false;
          if(res.success){
            //token 
            localStorage.setItem('token',res.token);
            //username
            localStorage.setItem('username',res.username);

            this.errorMsg = '';
             this.router.navigate(['/main-layout/student']);
            this.snackBar.open('Login Successful','Close',{duration:6000,horizontalPosition:'center',verticalPosition:'top',panelClass:['success-snackbar']});
          }
        },
        error:(err:any)=>{
          this.loading = false;
          console.log('Invalid username',err);
          this.errorMsg = 'Invalid Username Or Password'+ err.errors;
           this.snackBar.open('Login Failed','ok',{duration:6000,horizontalPosition:'center',verticalPosition:'top',panelClass:['error-snackbar']});
        }
      })
    }

  }
}
