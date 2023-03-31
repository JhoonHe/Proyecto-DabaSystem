import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicarComponent } from './components/aplicar/aplicar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'aplicar', component: AplicarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
