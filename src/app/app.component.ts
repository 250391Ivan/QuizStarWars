import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StarwarsService } from './services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starWarsExamen';
  img ='https://www.pinclipart.com/picdir/big/531-5315989_star-wars-logo-no-background-hd-png-download.png'
  menu:any[]=[
    {id:1,name:'Amenza Fantasma'},
    {id:2,name:'Ataque de los clones'},
    {id:3,name:'La venganza de los sith'},
    {id:4,name:'Una Nueva Esperanza'},
    {id:5,name:'El imperio Contraataca'},
    {id:6,name:'Retorno del Jedi'},
  ]

  constructor(private _starwarsService:StarwarsService,
    private _router:Router){

}

 
  ngOnInit(): void {
   // this.getAllMovies()
  }

  getAllMovies(){
    this._starwarsService.getMovies().subscribe(res =>{
      console.log('movies',res);
      let datos = res.results
      this.menu = datos.sort()
      
    })
  }
  GotoModal(){
    this._router.navigate(['/registro'])
  }
}
