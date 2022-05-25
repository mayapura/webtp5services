import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisasComponent } from './components/divisas/divisas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  { path: 'peliculas', component:PeliculasComponent },
  { path: 'divisas', component:DivisasComponent },
  { path: 'traductor', component:TraductorComponent },
  { path: '**', pathMatch:'full', redirectTo:'peliculas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
