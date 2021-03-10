import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { EditListPostComponent } from './edit-list-post/edit-list-post.component';
import { ListPostComponent } from './list-post/list-post.component';

const routes: Routes = [
  {
    path: '',
    component : AddPostComponent
  },
  {
    path: 'addPost',
    component : AddPostComponent
  },
  {
    path : 'list',
    component : ListPostComponent
  },
  {
    path : 'editList/:index',
    component : EditListPostComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
