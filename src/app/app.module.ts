import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule   } from '@angular/common/http'
import { MomentModule } from 'angular2-moment';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'updates', component: BlogComponent },
  { path: 'updates/:id', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MomentModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Title, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
