import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username ='';
  password ='';

  constructor(
    private authService: AuthService,
    private router :Router
  ){}

  login(){
    this.authService.login(this.username,this.password).subscribe({
      next:(res:any) =>{
        console.log('Login success',res);

        //save token
        localStorage.setItem('token',res.token);
        //navigate to home
        this.router.navigate(['/rides']);
      },
      error:(err)=>{
        console.error('Login failed',err);
        alert('Invalid credentials');
      }
    });

    console.log('Username:',this.username);
    console.log('Password:',this.password);
  }

}
