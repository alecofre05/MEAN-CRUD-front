import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';
import { TitleCasePipe } from '@angular/common';
import Swal from'sweetalert2';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  listService: Service[] = [];

  constructor(private _servicesService: ServiceService,
              private toastr: ToastrService,
              private titlecasePipe:TitleCasePipe) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this._servicesService.getServices().subscribe(data => {
      console.log(data);
      this.listService = data;
    }, error => {
      console.log(error);
    })
  }
  
  deleteServices(id: any) { 
    Swal.fire({
      title: '¿Realmente desea eliminar el servicio?',
      text: 'El servicio se eliminará permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Sí, eliminalo'
    }).then(respuesta => {
      if(respuesta.isConfirmed) {
      this._servicesService.deleteServices(id).subscribe(data => {
        this.toastr.error('El servicio fue eliminado', 'Servicio eliminado', { timeOut : 3000 , closeButton : true, positionClass : 'toast-bottom-right', progressBar: true});
        this.getServices();
      }, error =>{
        console.log(error);
      })
      Swal.fire('Borrado!', 'El elemento ha sido borrado', 'success');
      } else {
        Swal.fire('El servicio no fue eliminado', '', 'info')
      }
    })
}


  getServiceByBank(bankName: string) {
    this._servicesService.getServiceByBank(bankName).subscribe(data => {
      this.listService = data;
    }, error => {
      console.log(error);
    })
  }

  transformName(textToTransform: string){
    return this.titlecasePipe.transform(textToTransform);
}

}
