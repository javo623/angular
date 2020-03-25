import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { PostServiceSub } from 'src/app/services/postsub.service';
import swal from 'sweetalert2';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { PostSub } from 'src/app/interfaces/postsub.iterface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-tablesub',
  templateUrl: './tablesub.component.html',
  styleUrls: ['./tablesub.component.scss']
})
export class TablesubComponent implements OnInit {
  displayedColumns: string[] = ['name', 'location', 'description', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})sort: MatSort;



  constructor(private postSvc: PostServiceSub,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.postSvc.getAllPosts()
    .subscribe( posts => this.dataSource.data = posts );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  onNewPost() {
  this.openDialog();
}

  onEditPost(post: PostSub) {
    console.log('Edit post', post);
    this.openDialog(post );

  }
  onDeletePost(post: PostSub) {
  swal.fire({
    title: '¿Estas seguro?',
    text: 'Una vez eliminado no se puede recuperar el registro',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then (result => {
    if (result.value ) {
      this.postSvc.deletePostById(post).then(() => {
        swal.fire('Borrar', 'Tu evento se elimino.', 'success');
      }).catch((error) => {swal.fire('Error', 'Tu evento no pudo ser eliminado.', 'error');
    })
      ;
    }
  });
}

  openDialog(post?: PostSub): void {
    const config = {
      data: {
        message: post ? 'Editar evento' : 'Nuevo evento',
        content: post
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result ${result}`);
    });
  }


}
