import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { ServicioDescripcion } from 'src/app/interfaces/servicio-descripcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  servicio: ServicioDescripcion;
 id: string;

  constructor( private route: ActivatedRoute,
               public servicioService: ServiciosService ) { }

  ngOnInit() {

  this.route.params
  .subscribe( parametros => {
    // tslint:disable-next-line: no-string-literal
    this.servicioService.getServicio(parametros['id'])
        .subscribe( (servicio: ServicioDescripcion) => {
          // tslint:disable-next-line: no-string-literal
          this.id = parametros['id'];
          this.servicio = (servicio);
          // console.log(servicio);
        });
  });


  }

}
