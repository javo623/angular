import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostI } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  private image: any;
  constructor(private postSvc: PostService) { }

  public newPostForm = new FormGroup({
      name: new FormControl('', Validators.required),
      descrition: new FormControl('', Validators.required),
      dresscode: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),

  });
  ngOnInit() {
  }

   addNewEvent( data: PostI ) {
     console.log ('New event', data);
     this.postSvc.preAddandUpdate(data, this.image);
   }

  handleImage(event: any): void {
    this.image = event.target.files[0];
    console.log('IMage', this.image);
  }

}
