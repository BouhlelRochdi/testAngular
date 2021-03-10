import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPostComponent } from './list-post/list-post.component';
import { EditListPostComponent } from './edit-list-post/edit-list-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ListPostComponent,
    EditListPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
