import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmoviesComponent } from './pages/allmovies/allmovies.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'movies', component:AllmoviesComponent},
  {path:'episodios/:id', component:EpisodiosComponent},
  {path:'registro', component:RegistroComponent},
  {path:'**', redirectTo:'movies'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
