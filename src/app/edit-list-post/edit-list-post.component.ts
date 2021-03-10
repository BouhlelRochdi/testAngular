import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamPostService } from '../services/param-post.service';

@Component({
  selector: 'app-edit-list-post',
  templateUrl: './edit-list-post.component.html',
  styleUrls: ['./edit-list-post.component.css']
})
export class EditListPostComponent implements OnInit {
  editPost: FormGroup;
  submited = false;
  index;

  constructor(private activatedRouter: ActivatedRoute, private router:Router, private paramPostService : ParamPostService ) { }

  ngOnInit(): void {
    this.index =  this.activatedRouter.snapshot.params.index;
    this.editPost = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      categoryPost: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });

    this.getAllElement(this.index, this.editPost);

  }

  getAllElement(compt, data){
    // let list = JSON.parse(localStorage.getItem('posts'));
    this.paramPostService.patchPost(compt, data);
    // this.editPost.patchValue(list[compt]);

  }

  upDatePost(){
    this.submited = true;
    if (this.editPost.invalid){
      return;
    }
    else {
    this.paramPostService.upDatePost(this.editPost.value, this.index);
    this.editPost.reset();
    this.submited = false;
  }
}
}
