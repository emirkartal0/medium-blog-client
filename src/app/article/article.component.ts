import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  //@Input() article: any;

  article: any = {
    Owner: "Emir Kartal",
    CreatedTime: "Feb 27",
    Title: "How to make PHP 2000 times faster",
    Content: "We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development.We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development. Why PHP is an awesome language? It’s reliable, — you...",
    Label: "PHP",
    ImageUrl: "/assets/contentPic1.jpeg"
  }
  

}
