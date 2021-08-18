import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  listService: Service[] = [];

  constructor(private _servicesService: ServiceService,
              private toastr: ToastrService) { }

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
    this._servicesService.deleteServices(id).subscribe(data => {
      this.toastr.error('El servicio fue eliminado', 'Servicio eliminado', { timeOut : 3000 , closeButton : true});
      this.getServices();
    }, error =>{
      console.log(error);
    })
  }

}
