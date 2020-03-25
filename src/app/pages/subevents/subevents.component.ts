import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostServiceSub } from 'src/app/services/postsub.service';


@Component({
  selector: 'app-subevents',
  templateUrl: './subevents.component.html',
  styleUrls: ['./subevents.component.scss']
})
export class SubeventsComponent implements OnInit {

  public posts$: Observable<PostI>;

  constructor(private route: ActivatedRoute,
              private postSvc: PostServiceSub) { }

  ngOnInit() {

    this.postSvc.getAllPosts().subscribe(res => console.log('Sub ', res  ));


    // const idpost = this.route.snapshot.params.id;
    // this.posts$ = this.postSvc.getOnePost(idpost);
  }

}
