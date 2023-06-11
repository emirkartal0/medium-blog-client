import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: 'home',
    component: NavbarComponent,
    children: [
      {
        path:'',
        component: BodyComponent
      },
      {
        path: 'edit',
        component:EditArticleComponent
      },
      {
        path:':id',
        component: ArticleComponent
      },
    ]
  },
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
