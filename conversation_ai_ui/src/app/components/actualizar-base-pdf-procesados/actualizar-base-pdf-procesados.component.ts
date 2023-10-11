import {
  Component,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-actualizar-base-pdf-procesados',
  templateUrl: './actualizar-base-pdf-procesados.component.html',
  styleUrls: ['./actualizar-base-pdf-procesados.component.css']
})
export class ActualizarBasePdfProcesadosComponent implements OnInit {
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;

  botMessage: any;

  enabled: any;
  new_recording: any;
  stop_recording: any;


  mediaRecorder: any;
  audioChunks: any[] = [];

  pdfFile: File | undefined;

  file: any;

  filename: any = "";

  items: any = [];

  subir_enabled: boolean = true;

  entrenar_enabled: boolean = true;


  constructor(
    private http: HttpClient, 
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.obtener_archivos();
  }

  obtener_archivos() {
    this.http.get < string[] > ('http://localhost:8000/obtener_listado_archivos_procesados/').subscribe(items => {
      this.items = items;
    });
  }


  // onSubmit(): void {
  //   const formData = new FormData();    
  //   if (this.pdfFile == undefined) {
  //     this.toastr.error('Seleccione un archivo', 'Atención');
  //     this.subir_enabled = true;
  //   } else {
  //     formData.append('pdf', this.pdfFile || '', this.pdfFile?.name);
  //     this.http.post('http://localhost:8000/subir_pdf/', formData)
  //       .subscribe({
  //         next: (response: any) => {
  //           this.items = response;
  //           this.subir_enabled = true;
  //           this.filename = "";
  //           this.pdfFile = undefined;
  //           this.toastr.success('Se levantó correctamente el archivo', 'Mensaje:');
  //         },
  //         error: error => {
  //           console.log(error);
  //           this.subir_enabled = true;
  //           this.filename = "";
  //           this.pdfFile = undefined;
  //         }
  //       });
  //   }
  // }

  // onFileSelected(event: any): void {
  //   this.pdfFile = event.target.files[0];
  //   this.filename = this.pdfFile?.name
  // }

  // entrenar_ia(){
  //   this.entrenar_enabled = false;
  //   this.http.get < string[] > ('http://localhost:8000/entrenar_ia/').subscribe(items => {
  //     // this.items = items;
  //     console.log(items);
  //     this.toastr.info('Se entrenó correctamente la IA', 'Mensaje:');
      
  //     this.entrenar_enabled = true;
  //   }, error => {
  //     this.toastr.error('Hubo un error: ' + error, 'Mensaje:');
  //     this.entrenar_enabled = true;
  //   });
  // }


}
