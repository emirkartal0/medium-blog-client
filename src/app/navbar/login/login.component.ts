import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}


  login(data: NgForm) {
    this.http.post<any>('https://localhost:7118/api/Auth/login', data).subscribe(data => {
      this.sessionStorageService.setItem('token', data.token);
    })
  }

}
