import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private url= 'https://localhost:44360'

    constructor(private httpClient: HttpClient) { }

    
    getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(this.url+'/api/movies')
    }
}
