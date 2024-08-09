import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { PostsComponent } from './placeholder/pages/posts/posts.component';
import { PhotosComponent } from './placeholder/pages/photos/photos.component';
import { HomeComponent } from './placeholder/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
