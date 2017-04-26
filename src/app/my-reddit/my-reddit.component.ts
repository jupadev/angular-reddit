import { Component, OnInit, Input, NgModule, SimpleChanges } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@NgModule({
 imports: [
     CommonModule
   ]
})
@Component({
  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css'],
  providers: [MyDataService]
})
export class MyRedditComponent implements OnInit {

  @Input('subreddit') subreddit:string;
  
  posts: Post[];

  constructor( private data: MyDataService ) {}

  ngOnInit() {
    this.serviceCall();
  }

  serviceCall() {
    this.data.fetchPosts(this.subreddit).subscribe(
        posts => this.posts = posts);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.serviceCall();
  }

}
