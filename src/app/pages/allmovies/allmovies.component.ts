import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent implements OnInit {

  Movies:any[]=[]
  showInfo:boolean = true
  constructor( private _starwarsService:StarwarsService,
               private _router:Router
    ) { }

  ngOnInit(): void {
    this.allMovies()
  }
  
  allMovies(){
    this._starwarsService.getMovies().subscribe(({results})=>{
      console.log('allMovies',results);
      this.Movies= results
      if (this.Movies) {
        this.showInfo = false
        
      }
     
    })
  }
  GotoEpisode(episodio:any){
    this._router.navigate(['/episodios/'+episodio])
   // console.log('index',episodio);
  }
}
