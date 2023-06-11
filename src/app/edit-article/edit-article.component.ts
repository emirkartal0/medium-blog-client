import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  options : any = {}
  token: string = '';

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.token = this.sessionStorageService.getItem('token');
    
  }

  newArticle(data: NgForm) {
    this.options.headers = { 'Authorization': 'Bearer ' + this.token };
    this.http.post<any>('https://localhost:7118/api/Article/postArticle', data, this.options ).subscribe(data => {
      console.log(data)
  })
  }

}
