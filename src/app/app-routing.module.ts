import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListServiceComponent } from './components/list-service/list-service.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';

const routes: Routes = [
  { path: '', component: ListServiceComponent },
  { path: 'crear-servicio', component: CreateServiceComponent},
  { path: 'editar-servicio/:id', component: CreateServiceComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
