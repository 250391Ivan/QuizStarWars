import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarwarsService } from 'src/app/services/starwars.service';
interface heroes{
  name:string;
  gender:string;
  height:number;
  birth_year:number; 
}
interface nave{
  name:string;
  model:string;
  cargo_capacity:number;
  cost_in_credits:number;
}
interface planeta{
  name:string;
  gravity:string;
  population:number;
  climate:number;
}
@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  idMovie:any;
personajes:heroes[]=[]
naves:nave[]=[]
planetas:planeta[]=[]
showInfo:boolean = true

  constructor( private _starwarsService:StarwarsService,
               private _router:Router) { }
  
  ngOnInit(): void {
    this.idMovie = this._router.parseUrl(this._router.url);
    this.GetHeroes(this.idMovie.root.children.primary.segments[1].path) 
    this.allNaves(this.idMovie.root.children.primary.segments[1].path) 
    this.allPlanetas(this.idMovie.root.children.primary.segments[1].path) 
  }

  GetHeroes(id:any){
    this._starwarsService.getHeroes(id).subscribe(res =>{
      this.personajes.push({
        name:res.name,  
        gender:res.gender,
        height:res.height,
        birth_year:res.hair_color
        })
      if ( this.personajes) {
        this.showInfo = false
        
      }
     
    })

    }
  allNaves(id:any){
    this._starwarsService.getNaves(id).subscribe(res =>{
      this.naves.push({
        name:res.name,  
        model:res.model,
        cargo_capacity:res.cargo_capacity,
        cost_in_credits:res.cost_in_credits
        })
      if ( this.naves) {
        this.showInfo = false
        console.log('naves', this.naves);
        console.log('naves', res);
        
      }
     
    })

    }
  allPlanetas(id:any){
    this._starwarsService.getPlanetas(id).subscribe(res =>{
      this.planetas.push({
        name:res.name,  
        gravity:res.gravity,
        population:res.population,
        climate:res.climate
        })
      if ( this.planetas) {
        this.showInfo = false
        console.log('planetas', this.planetas);
        console.log('naves', res);
        
      }
     
    })

    }
  

}
