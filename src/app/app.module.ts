import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ArticlesComponent } from './body/articles/articles.component';
import { RecommendationComponent } from './body/recommendation/recommendation.component';

// ng-icons 
import { NgIconsModule } from '@ng-icons/core';
import { heroPencilSquare } from '@ng-icons/heroicons/outline';
import { heroBell } from '@ng-icons/heroicons/outline';
import { heroPlus } from '@ng-icons/heroicons/outline';
import { heroMinusSmall } from '@ng-icons/heroicons/outline';
import { heroBookmark } from '@ng-icons/heroicons/outline';
import { heroMinusCircle } from '@ng-icons/heroicons/outline';
import { heroEllipsisHorizontal } from '@ng-icons/heroicons/outline';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AuthComponent } from './navbar/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ArticlesComponent,
    RecommendationComponent,
    ArticleComponent,
    EditArticleComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroPencilSquare, heroBell, heroPlus, heroMinusSmall, heroBookmark, heroMinusCircle, heroEllipsisHorizontal }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
