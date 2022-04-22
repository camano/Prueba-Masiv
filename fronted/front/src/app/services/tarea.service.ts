import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tarea} from '../models/Tarea'
import { Observable } from 'rxjs';
import { nuevoTarea } from '../models/nuevotarea';
@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareaUrl=environment.tareaURL;
  constructor(private httpClient:HttpClient) { }

  listarTareas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(this.tareaUrl);
  }

  savetarea(tarea:nuevoTarea):Observable<any>{
    return this.httpClient.post<any>(this.tareaUrl + "addTarea",tarea);
  }

  updateTarea(id:number,estadoId:any):Observable<any>{
    return this.httpClient.put<any>(this.tareaUrl + `updateTarea/${id}`,estadoId)
  }

  deletetarea(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.tareaUrl + `deleteTarea/${id}`)
  }

}
