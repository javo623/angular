import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './user/register/register.component';
import { SubeventsComponent } from './pages/subevents/subevents.component';


const routes: Routes = [
{path: 'home', component: PortafolioComponent },
{path: 'about', component: AboutComponent},
{path: 'item/:id', component: ItemComponent},
{path: 'search/:termino', component: SearchComponent},
{path: 'regis', component: RegisterComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'events', loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule) },
{path: 'subevents/:id', component: SubeventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
