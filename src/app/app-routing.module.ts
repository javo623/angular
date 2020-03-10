import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './user/register/register.component';
import { EventComponent } from './pages/event/event.component';
import { PostComponent } from './user/post/post.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';


const routes: Routes = [
{path: 'home', component: PortafolioComponent },
{path: 'about', component: AboutComponent},
{path: 'item/:id', component: ItemComponent},
{path: 'search/:termino', component: SearchComponent},
{path: 'regis', component: RegisterComponent},
{path: 'event', component: EventComponent},
{path: 'post/:id', component: PostComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
