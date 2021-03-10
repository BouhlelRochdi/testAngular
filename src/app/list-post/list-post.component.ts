import { Component, OnInit } from '@angular/core';
import { ParamPostService } from '../services/param-post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts : [];
  constructor(private paramPostService : ParamPostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.posts = this.paramPostService.getAllPosts();
  }
  deletePost(index){
    this.paramPostService.deletePost(index);
  }
  }

