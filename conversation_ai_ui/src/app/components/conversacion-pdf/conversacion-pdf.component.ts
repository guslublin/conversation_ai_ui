import {
  Component,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  ToastrService
} from 'ngx-toastr';

import Pusher from 'pusher-js';

import {
  environment
} from "src/app/environment";
import {
  response
} from 'express';
import {
  error,
  log
} from 'console';

@Component({
  selector: 'app-conversacion-pdf',
  templateUrl: './conversacion-pdf.component.html',
  styleUrls: ['./conversacion-pdf.component.css']
})
export class ConversacionPdfComponent implements OnInit {
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

  pusher: Pusher;
  channel: any;

  user = 'Usuario';
  messages: any[] = [];

  msg = [{
    theme: '',
    username: '',
    message: ''
  }];

  consulta: any;

  message = '';

  enviar_enabled = false;

  consulta_send: any;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: environment.pusher.forceTLS
    });
    this.channel = this.pusher.subscribe('my-channel');
    this.channel.bind('my-event', (data: any) => {
      console.log('Recibí un mensaje: ' + data.message);
    });
  }


  ngOnInit(): void {
    Pusher.logToConsole = true;

    var pusher = new Pusher('3a34edc0fe9c326a3e99', {
      cluster: 'sa1'
    });

    var channel = pusher.subscribe('chat');
    channel.bind('message',  (data: any[] = []) => {
      // alert(JSON.stringify(data));
      this.messages.push(data);
    });

    this.messages.push({
      theme: 'is-link',
      username: 'Conversation UI',
      message: 'Bienvenido, haga una consulta a sus archivos.'
    });
  }

  onSubmit(): void {
    // this.startRecording();
    // console.log('Consulta:', this.consulta);
    // this.http.post('http://localhost:8000/send_pusher_event/', {
    //   username: this.user,
    //   consulta: this.consulta
    // });


    this.messages.push({
      theme: 'is-dark',
      username: this.user,
      message: this.consulta
    });

    this.enviar_enabled = true
    this.consulta_send = this.consulta;

    // this.consulta = '';
    console.log('user:', this.user);
    

    this.http.post('http://localhost:8000/send_pusher_event/', {
      username: this.user,
      consulta: this.consulta
    })
      .subscribe({
        next: (response: any) => {
         console.log('Respuesta: ', response);
         this.enviar_enabled = false;
        },
        error: error => {
          console.log('Aquí hay error: ', error);
          // this.consulta = '';
          this.enviar_enabled = false;
        }
      });
  }

  startRecording() {
    navigator.mediaDevices.getUserMedia({
        audio: true
      })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.addEventListener('dataavailable', (event: {
          data: any;
        }) => {
          this.audioChunks.push(event.data);
        });
        this.mediaRecorder.start();
      });
    this.enabled = false;
    this.stop_recording = true;
  }

  stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.stop_recording = false;
      this.mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(this.audioChunks, {
          type: 'audio/wav'
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audioPlayer.nativeElement.src = audioUrl;

        // Supongamos que blob es el objeto Blob que queremos convertir
        const file = new File([audioBlob], 'nombre-archivo', {
          type: audioBlob.type,
          lastModified: Date.now()
        });
        console.log(file);
        this.uploadAudio(file);
      });
    }
  }


  uploadAudio(file: File) {
    const formData = new FormData();
    // formData.append('pdf', this.pdfFile || '', this.pdfFile?.name);
    formData.append('audio_file', file);

    this.http.post('http://localhost:8000/upload_pdf_langchain/', formData)
      .subscribe({
        next: (response: any) => {
          console.log('Response: ', response);

          console.log('Archivo de audio enviado exitosamente ', response.text_response_ai);
          const mensaje = new SpeechSynthesisUtterance(response.text_response_ai);

          // Lee el texto utilizando la API de SpeechSynthesis del navegador web
          window.speechSynthesis.speak(mensaje);
          this.new_recording = true;
        },
        error: error => {
          console.log('Error al enviar el archivo de audio ', error);
          this.enabled = true;
          this.new_recording = true;
        }
      });
  }


  consultar_pdf() {
    console.log('consultar_pdf');

    this.http.get < string[] > ('http://localhost:8000/consultar_pdf/').subscribe(items => {
      console.log(items);
      this.toastr.info('Consulta hecha con éxito', 'Mensaje:');

    }, error => {
      this.toastr.error('Hubo un error: ' + error, 'Mensaje:');
    });
  }

  sendPusherEvent() {
    this.http.get('http://localhost:8000/send_pusher_event/').subscribe((data: any) => {
      console.log('Evento Pusher enviado con éxito.');
    });
  }

}
