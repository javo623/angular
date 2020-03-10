import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/interfaces/post.interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post$: Observable<PostI>;

  constructor( private route: ActivatedRoute,
               private postSvg: PostService) { }

  ngOnInit() {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvg.getOnePost(idPost);
  }

}
