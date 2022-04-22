import { Estado } from "./Estado";

export class Tarea {
  constructor(
    public tarea_id:number,
    public tarea_descripcion: string,
    public estado_id: string,
    public creado: string,
    public fecha: string,
    public estado :Estado
  ) {}
}
