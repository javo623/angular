import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { PostI } from 'src/app/interfaces/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public post$: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  ngOnInit() {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
  }
}
