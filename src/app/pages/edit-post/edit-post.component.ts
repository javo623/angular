import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostI } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: PostI;

  constructor(private postSvc: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl ('', Validators.required),
    name: new FormControl ('', Validators.required),
    descrition: new FormControl ('', Validators.required),
    start_date: new FormControl ('', Validators.required),
    location: new FormControl ('', Validators.required),
    end_date: new FormControl ('', Validators.required),
    dresscode: new FormControl ('', Validators.required),
    image: new FormControl ('', Validators.required),
    fileRef: new FormControl ('', Validators.required),
  });

  ngOnInit() {
    this.image = this.post.image;
    this.imageOriginal = this.post.image;
    this.initValuesForm();
  }

  editEvent(post: PostI) {
    console.log('Img', this.image);
    console.log('original', this.imageOriginal);
    if (this.image === this.imageOriginal) {
      this.post.image = this.imageOriginal;
      this.postSvc.editPostById(post);
    } else {
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any): void  {
    this.image = event.target.files[0];
   }

   private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      name: this.post.name,
      start_date: this.post.start_date,
      end_date: this.post.end_date,
      location: this.post.location,
      dresscode: this.post.dresscode,
    });
   }

}
