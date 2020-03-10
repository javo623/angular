import { Component } from '@angular/core';
import { InfoPaginasService } from './services/info-paginas.service';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoPaginaService: InfoPaginasService,
              public serviciosService: ServiciosService) {

  }
}
