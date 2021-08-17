import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { InvertirCadenaPipe } from './pipes/invertir-cadena.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { AllmoviesComponent } from './pages/allmovies/allmovies.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ImagenesPipe,
    InvertirCadenaPipe,
    OrdenarPipe,
    AllmoviesComponent,
    EpisodiosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
