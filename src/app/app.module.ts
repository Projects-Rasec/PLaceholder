import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { PostsComponent } from './placeholder/pages/posts/posts.component';
import { ToolbarComponent } from './placeholder/components/toolbar/toolbar.component';
import { PhotosComponent } from './placeholder/pages/photos/photos.component';
import { HomeComponent } from './placeholder/pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PostsComponent,
    ToolbarComponent,
    PhotosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
