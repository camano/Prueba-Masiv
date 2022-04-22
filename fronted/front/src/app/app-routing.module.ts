import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregartareaComponent } from './component/agregartarea/agregartarea.component';
import { TareasComponent } from './component/tareas/tareas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/Tareas',
    pathMatch:'full'
  },
  {
    path:'Tareas',
    component:TareasComponent
  },
  {
    path:"AddTarea",
    component:AgregartareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
