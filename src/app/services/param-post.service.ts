import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ParamPostService {

  constructor(private activatedRouter: ActivatedRoute, private router:Router) { }

  addPost(data){
    let post = JSON.parse(localStorage.getItem('posts')) || [];
    post.push(data);
    localStorage.setItem('posts', JSON.stringify(post));
  }

  getAllPosts(){
    let post = JSON.parse(localStorage.getItem('posts'));
    return post;
  }

  patchPost(index, data){
    let list = JSON.parse(localStorage.getItem('posts'));
    data.patchValue(list[index]);
  }

  upDatePost(data, index){
    let list = JSON.parse(localStorage.getItem('posts'));
    list.splice(index,1, data);
    localStorage.setItem('posts', JSON.stringify(list));
  }

  deletePost(index){
    let list = JSON.parse(localStorage.getItem('posts'));
    list.splice(index,1);
    localStorage.setItem('posts', JSON.stringify(list));
  }
}
