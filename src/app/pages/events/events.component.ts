import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostI } from 'src/app/interfaces/post.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public posts$: Observable<PostI[]>;

  constructor(private PostSvc: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.PostSvc.getAllPosts().subscribe(res => console.log('POSTS', res));
    this.posts$ = this.PostSvc.getAllPosts();
  }

}
