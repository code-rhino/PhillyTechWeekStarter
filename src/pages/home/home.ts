import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PostServiceProvider} from '../../providers/post-service/post-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public posts: any;

  constructor(public nav: NavController) {
    this.posts = [];
  }

  toggleLike(post) {
    // if user liked
    if(post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }

    post.liked = !post.liked
  }

  // on click, go to post detail
  viewPost(postId) {
    
  }

  // on click, go to user timeline
  viewUser(userId) {
    
  }
}