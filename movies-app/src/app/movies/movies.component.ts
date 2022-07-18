import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    title = 'IMDb Movies';
    movies: Movie[] = [];
    p: number = 1;
    searchText: any;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies() ;
    }
 
    getMovies(): void {
        this.movieService.getMovies().subscribe(movies =>{
            this.movies = movies;
        } );
    } 

 }
