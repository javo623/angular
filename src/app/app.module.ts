import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './user/register/register.component';
import { EventComponent } from './pages/event/event.component';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './shared/modal/modal.component';
import { PostComponent } from './user/post/post.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';


// firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { EditPostModule } from './pages/edit-post/edit-post.module';
// import { NgbDateFirestoreAdapter } from './services/ngb-date-firestore-adapter.service';
// import { NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    RegisterComponent,
    EventComponent,
    PostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    NewPostComponent,
    EditPostComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    EditPostModule,
    // NgbModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    {provide: StorageBucket, useValue: 'gs://invitaciones-6c645.appspot.com/',
    // NgbDateAdapter, useClass: NgbDateFirestoreAdapter
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
