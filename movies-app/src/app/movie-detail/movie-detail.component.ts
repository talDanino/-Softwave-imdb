import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    movies: Movie[] = [];
    movie: Movie | undefined;

     constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        
    ) { }
    ngOnInit(): void {
        this.findMovie() ;
       
    }
 
    findMovie(): void {
         
        this.movieService.getMovies().subscribe(movies =>{
            this.movies = movies;
            console.log(this.movies);
            const routeParams = this.route.snapshot.paramMap;
 
            const movieIdFromRoute = String(routeParams.get('id'));
     
            this.movie = this.movies.find(movie => movie.id === movieIdFromRoute);
            console.log("result: "+this.movie);

        } );
     } 



    
}
