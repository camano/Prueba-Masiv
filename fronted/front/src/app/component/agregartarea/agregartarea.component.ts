import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nuevoTarea } from 'src/app/models/nuevotarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-agregartarea',
  templateUrl: './agregartarea.component.html',
  styleUrls: ['./agregartarea.component.css'],
})
export class AgregartareaComponent implements OnInit {
  nuevoTarea: nuevoTarea = {
    tarea_descripcion: '',
    estado_id: '1',
    creado: '',
  };
  constructor(private tareaService: TareaService, private router: Router) {}

  ngOnInit(): void {}

  addTarea() {
    
    this.tareaService.savetarea(this.nuevoTarea).subscribe(
      (data) => {
        console.log('Respuesta :: ', data);
        alert(data.mensaje)
        this.router.navigate(["/"])
      },
      (err) => {
        console.error('Error :', err);
      }
    );
  }
}
