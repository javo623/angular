import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostSub } from 'src/app/interfaces/postsub.iterface';
import {FileSub} from 'src/app/interfaces/filesub.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class PostServiceSub {
    private postsCollection: AngularFirestoreCollection<PostSub>;
    private filePath: any;
    private downloadURL: Observable<string>;
    constructor(private afs: AngularFirestore,
                private storage: AngularFireStorage,
                private http: HttpClient,
                private route: ActivatedRoute,
                private postSvc: PostServiceSub
) {
this.postsCollection = afs.collection<PostSub>('subevents');
}


public getAllPosts(): Observable<PostSub[]> {
return this.postsCollection
.snapshotChanges()
.pipe(
    map(actions =>
        actions.map( a => {
            const data = a.payload.doc.data() as PostSub;
            const id  = a.payload.doc.id;
            return {id, ...data };
        })
        )
);
}

public getOnePost(id: PostSub): Observable<PostSub> {
return this.afs.doc<PostSub>(`subevents/${id}`).valueChanges();
}

public deletePostById(post: PostSub) {
return this.postsCollection.doc(post.id).delete();

}

public editPostById(post: PostSub, newImage?: FileSub) {
if (newImage) {
this.uploadImage(post, newImage);
} else {
return this.postsCollection.doc(post.id).update(post);
}
}


public preAddandUpdate(post: PostSub, image: FileSub): void {
this.uploadImage( post, image);
}

private saveEvent( post: PostSub ) {
const postEvent = {
name: post.name,
descrition: post.descrition,
start_date: post.start_date,
end_date: post.end_date,
location: post.location,
dresscode: post.dresscode,
image: this.downloadURL,
fileRef: this.filePath,
};
if (post.id) {
return this.postsCollection.doc(post.id).update(postEvent);
} else {
return this.postsCollection.add(postEvent);
}
}

private uploadImage(post: PostSub, image: FileSub) {
this.filePath = `images/${image.name}`;
const fileRef = this.storage.ref(this.filePath);
const task = this.storage.upload(this.filePath, image);
task.snapshotChanges()
.pipe(
  finalize(() => {
    fileRef.getDownloadURL().subscribe(urlImage => {
      this.downloadURL = urlImage;
      this.saveEvent(post);
    });
  })
).subscribe();
}

}

