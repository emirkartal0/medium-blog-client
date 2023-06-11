import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<any>('https://localhost:7118/api/Article/getArticles').subscribe(data => {
        console.log(data)
        this.articles = data;
    })
  }

  

}
