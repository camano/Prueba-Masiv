import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/models/Estado';
import { Tarea } from '../../models/Tarea';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  estado: Estado = {
    estado_id: 0,
    estado_nombre: '',
  };

  constructor(private tareaService: TareaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareaService.listarTareas().subscribe(
      (data) => {
        console.log('respueta : ', data);
        this.tareas = data;
      },
      (err) => {
        console.error('Error : ', err);
      }
    );
  }

  updatetarea(id: number): void {
    let estados = {
      estado_id: 2,
    };
    this.tareaService.updateTarea(id, estados).subscribe(
      (data) => {
        console.log('respuesta :: ', data);
        window.location.reload();
      },
      (err) => {
        console.error('error ::', err);
      }
    );
  }

  deleteTarea(id: number): void {
    this.tareaService.deletetarea(id).subscribe(
      (data) => {
        console.log('Respuesta :: ', data);
        window.location.reload();
      },
      (err) => {
        console.error('Error : ',err);
      }
    );
  }
}
