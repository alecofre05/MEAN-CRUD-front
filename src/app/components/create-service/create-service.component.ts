import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  serviceForm: FormGroup;
  title = 'Crear servicio';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _serviceServices: ServiceService,
              private aRoute: ActivatedRoute) { 
    this.serviceForm = this.fb.group({
      nombre: ['', Validators.required],
      banco: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaVto: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.isEdit();
  }

  createService() {

    const servicio: Service = {
      nombre: this.serviceForm.get('nombre')?.value,
      banco: this.serviceForm.get('banco')?.value,
      descripcion: this.serviceForm.get('descripcion')?.value,
      fechaVto: this.serviceForm.get('fechaVto')?.value
    }
    if(this.id !== null) {
      this._serviceServices.updateServices(this.id, servicio).subscribe(data => {
        this.toastr.info('El servicio se actualizó correctamente', 'Servicio actualizado', { timeOut : 3000 , closeButton : true , positionClass : 'toast-bottom-right', progressBar: true});
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.serviceForm.reset();
      })

    } else {

      console.log(servicio);
      this._serviceServices.saveServices(servicio).subscribe(data =>{
      this.toastr.success('El servicio se registró correctamente', 'Servicio regsitrado', { timeOut : 3000 , closeButton : true, positionClass : 'toast-bottom-right', progressBar: true});
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.serviceForm.reset();
    })
    }
  }

  isEdit() {
    if(this.id !== null) {
      this.title = "Editar servicio";
      this._serviceServices.getServiceByID(this.id).subscribe(data => {
        this.serviceForm.setValue({
          nombre: data.nombre,
          banco: data.banco,
          descripcion: data.descripcion,
          fechaVto: data.fechaVto
        })
      })
    }
  }
}
