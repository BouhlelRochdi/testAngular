import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ValiDate } from '../classes/vali-date';
import { ParamPostService } from '../services/param-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPost: FormGroup;
  submited = false;

  constructor(private paramPostService: ParamPostService) { }

  ngOnInit(): void {
    this.addPost = new FormGroup({
      titlePost: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      descPost: new FormControl('', [Validators.required, Validators.minLength(5)]),
      category: new FormControl('', [Validators.required]),
      datePost: new FormControl('', [Validators.required])
    })
  }
  get categoryField(): string {
    return this.addPost.get('category').value;
  }
  sendData() {
    this.submited = true;
    if (this.addPost.invalid) {
      return;
    }
    else {
      this.paramPostService.addPost(this.addPost.value);
      this.addPost.reset();
      this.submited = false;

      
    }
  }

}
