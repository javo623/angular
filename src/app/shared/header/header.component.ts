import { Component, OnInit, RootRenderer } from '@angular/core';
import { InfoPaginasService } from 'src/app/services/info-paginas.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviceS/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPaginaService: InfoPaginasService,
               private router: Router,
               public authSvc: AuthService ) { }

  ngOnInit() {
  }
  onLogout(): void {
    this.authSvc.logout();

  }

  buscarServicio( termino: string) {

    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);

  }

}
