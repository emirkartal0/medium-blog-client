import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {}

  register(data: NgForm) {
      this.http.post<any>('https://localhost:7118/api/Auth/register', data).subscribe(data => {
        this.sessionStorageService.setItem('token', data.token);
        if (data.token) {
          this.router.navigateByUrl('/home')
        }
    })
  }

}
