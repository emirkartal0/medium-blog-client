import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  articles: Array<any> = [
    {
      owner: "Emir Kartal",
      time: "Feb 27",
      title: "How to make PHP 2000 times faster",
      description: "We’ll discuss why PHP is an awesome programming language, how to make your applications faster in means of performance and development. Why PHP is an awesome language? It’s reliable, — you...",
      label: "PHP",
      minute: "5",
      picture: "/assets/contentPic1.jpeg"
    },
    {
      owner: "Emir Kartal",
      time: "Nov 30",
      title: "7 Unnecessary VSCode Extensions You Should Uninstall Now",
      description: "The number of VSCode extensions you have installed is one of the main reasons why you might find the editor slow and power-hungry,...",
      label: "Vscode",
      minute: "9",
      picture: "/assets/contentPic2.png"
    },
    {
      owner: "Emir Kartal",
      time: "May 20",
      title: "Build and Deploy a Markdown Editor Using Next.js, TypeScript, CodeMirror 6, and react-markdown",
      description: "Learn to build a Next.js Application. — Following our previous project — Build a Markdown Editor Using Electron, ReactJS, Vite, CodeMirror,...",
      label: "NextJs",
      minute: "9",
      picture: "/assets/contentPic3.png"
    }
  ]

}
