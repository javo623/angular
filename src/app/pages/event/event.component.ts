import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostI } from 'src/app/interfaces/post.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

public posts$: Observable<PostI[]>;

  constructor( private PostSvc: PostService) { }

  ngOnInit( ) {

   this.PostSvc.getAllPosts().subscribe(res => console.log('POSTS', res));
   this.posts$ = this.PostSvc.getAllPosts();
  }

}
