import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../interfaces/servicios.iterface';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  cargando = true;
  servicios: Servicio[] = [];
  servicioFiltrado: Servicio[] = [];

  constructor(private http: HttpClient) {

    this.cargarServicios();
   }

  private cargarServicios() {

    return new Promise( (resolve, reject ) =>  {
      this.http.get('https://invitaciones-6c645.firebaseio.com/servicios_idx.json')
      .subscribe( (resp: Servicio[] ) => {
        this.servicios = resp;
        this.cargando = false;
        resolve();
      });

    });


  }

  getServicio( id: string ) {

   return this.http.get(`https://invitaciones-6c645.firebaseio.com/servicios/${ id }.json`);

  }

  buscarServicio( termino: string) {

    if (this.servicios.length === 0) {
      // cargar-servicios
      this.cargarServicios().then( () => {
      // ejecutar despues de tener los servicios
      // Aplicar filtro
      this.filtarServicios( termino );
      });
    } else {
      // aplicar filtro
      this.filtarServicios( termino );
    }

  }

  private filtarServicios( termino: string  ) {

    // console.log(this.servicios);
    this.servicioFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.servicios.forEach( serv => {

      const tituloLower = serv.titulo.toLocaleLowerCase();

      if ( serv.categoria.indexOf( termino ) >= 0 ||  tituloLower.indexOf( termino ) >= 0 ) {
        this.servicioFiltrado.push( serv );
      }

    });
  }

}
