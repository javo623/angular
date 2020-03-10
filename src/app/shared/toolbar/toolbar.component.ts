import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serviceS/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(  authSvc: AuthService ) { }
  public appName = 'Prueba 2';
  ngOnInit() {
  }
  // onLogout(): void {
  //   this.authSvc.logout();
  // }

}
