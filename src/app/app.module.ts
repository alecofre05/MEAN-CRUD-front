import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';



//Component
import { AppComponent } from './app.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { ListServiceComponent } from './components/list-service/list-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateServiceComponent,
    ListServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
