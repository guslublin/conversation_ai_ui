import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HablaConIaComponent } from './components/habla-con-ia/habla-con-ia.component';
import { ActualizarBasePdfComponent } from './components/actualizar-base-pdf/actualizar-base-pdf.component';
import { ConversacionPdfComponent } from './components/conversacion-pdf/conversacion-pdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ActualizarBasePdfProcesadosComponent } from './components/actualizar-base-pdf-procesados/actualizar-base-pdf-procesados.component';
import { ActualizarBasePdfCohereComponent } from './components/actualizar-base-pdf-cohere/actualizar-base-pdf-cohere.component';
import { ActualizarBasePdfCohereProcesadosComponent } from './components/actualizar-base-pdf-cohere-procesados/actualizar-base-pdf-cohere-procesados.component';
import { ConversacionPdfCohereComponent } from './components/conversacion-pdf-cohere/conversacion-pdf-cohere.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HablaConIaComponent,
    ActualizarBasePdfComponent,
    ConversacionPdfComponent,
    ActualizarBasePdfProcesadosComponent,
    ActualizarBasePdfCohereComponent,
    ActualizarBasePdfCohereProcesadosComponent,
    ConversacionPdfCohereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
