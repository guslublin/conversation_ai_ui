import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;

  botMessage: any;

  enabled: any;
  new_recording: any;
  stop_recording: any;


  mediaRecorder: any;
  audioChunks: any[] = [];

  pdfFile: File | undefined;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.enabled = true;
      this.new_recording = false;
      this.stop_recording = false;
  }

  title = 'conversation_ai_ui';

  getBotMessage() {
    this.http.get('http://localhost:8000/conversation/').subscribe((data: any) => {
      this.botMessage = data.message;
    });
  }

  startRecording() {
    navigator.mediaDevices.getUserMedia({audio: true})
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.addEventListener('dataavailable', (event: { data: any; }) => {
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
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audioPlayer.nativeElement.src = audioUrl;
        // this.uploadAudio(this.audioPlayer.nativeElement.src);
        
        // Supongamos que blob es el objeto Blob que queremos convertir
        const file = new File([audioBlob], 'nombre-archivo', { type: audioBlob.type, lastModified: Date.now() });

        this.uploadAudio(file);

      });
    }
  }
  

  uploadAudio(file: File) {
    console.log(file);
    
    const formData = new FormData();
    formData.append('audio_file', file);
    
    // Enviar la solicitud HTTP POST a la API Django
    this.http.post('http://localhost:8000/audio/', formData)
      .subscribe({
        next: (response:any)=>{
          console.log('Archivo de audio enviado exitosamente ', response.generated_text);
          const mensaje = new SpeechSynthesisUtterance(response.generated_text);
          // Lee el texto utilizando la API de SpeechSynthesis del navegador web
          window.speechSynthesis.speak(mensaje);
          this.new_recording = true;
        }, 
        error: error=>{
          console.log('Error al enviar el archivo de audio ', error);
          this.enabled = true;
          this.new_recording = true;
        }
      });
  }
    
  newRecording(){
    this.enabled = true;
    this.new_recording = false;
    location.reload(); 
  }

  onFileSelected(event: any): void {
    this.pdfFile = event.target.files[0];
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('pdf', this.pdfFile || '', this.pdfFile?.name);
    this.http.post('http://localhost:8000/upload_pdf/', formData).subscribe(response => {
      console.log(response);
    });
  }
}
