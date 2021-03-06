import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostI } from 'src/app/interfaces/post.interface';
import {FileI} from 'src/app/interfaces/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class PostService {
      private postsCollection: AngularFirestoreCollection<PostI>;
      private filePath: any;
      private downloadURL: Observable<string>;



    constructor(private afs: AngularFirestore,
                private storage: AngularFireStorage,
                private http: HttpClient,
                private route: ActivatedRoute,
                private postSvc: PostService
        ) {
        this.postsCollection = afs.collection<PostI>('events');
    }


    public getAllPosts(): Observable<PostI[]> {
        return this.postsCollection
        .snapshotChanges()
        .pipe(
            map(actions =>
                actions.map( a => {
                    const data = a.payload.doc.data() as PostI;
                    const id  = a.payload.doc.id;
                    return {id, ...data };
                })
                )
        );
    }

    public getOnePost(id: PostI): Observable<PostI> {
        return this.afs.doc<PostI>(`event/${id}`).valueChanges();
    }

    public deletePostById(post: PostI ) {
        return this.postsCollection.doc(post.id).delete();

    }

    public editPostById(post: PostI, newImage?: FileI) {
     if (newImage) {
       this.uploadImage(post, newImage);
     } else {
      return this.postsCollection.doc(post.id).update(post);
     }
    }


    public preAddandUpdate(post: PostI, image: FileI): void {
      this.uploadImage( post, image);
    }

     private saveEvent( post: PostI ) {
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

    private uploadImage(post: PostI, image: FileI) {
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
