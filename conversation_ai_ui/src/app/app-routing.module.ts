import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HablaConIaComponent } from "./components/habla-con-ia/habla-con-ia.component";
import { ActualizarBasePdfComponent } from "./components/actualizar-base-pdf/actualizar-base-pdf.component";
import { ConversacionPdfComponent } from "./components/conversacion-pdf/conversacion-pdf.component";
import { ActualizarBasePdfProcesadosComponent } from './components/actualizar-base-pdf-procesados/actualizar-base-pdf-procesados.component';
import { ActualizarBasePdfCohereComponent } from './components/actualizar-base-pdf-cohere/actualizar-base-pdf-cohere.component';
import { ActualizarBasePdfCohereProcesadosComponent } from './components/actualizar-base-pdf-cohere-procesados/actualizar-base-pdf-cohere-procesados.component';
import { ConversacionPdfCohereComponent } from './components/conversacion-pdf-cohere/conversacion-pdf-cohere.component';

const routes: Routes = [
  { path: 'habla-con-ia', component: HablaConIaComponent},
  { path: 'actualizar-base-pdf', component: ActualizarBasePdfComponent},
  { path: 'actualizar-base-pdf-cohere', component: ActualizarBasePdfCohereComponent},
  { path: 'actualizar-base-pdf-procesados', component: ActualizarBasePdfProcesadosComponent},
  { path: 'actualizar-base-pdf-cohere-procesados', component: ActualizarBasePdfCohereProcesadosComponent},
  { path: 'conversacion-pdf', component: ConversacionPdfComponent},
  { path: 'conversacion-pdf-cohere', component: ConversacionPdfCohereComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
