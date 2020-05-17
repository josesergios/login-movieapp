import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { SearchType } from '../../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  listMovies: Observable<any>;
  constructor(private movieService: MovieService) {
    
   }

  ngOnInit() {
  }

searchMovie(){

  this.listMovies = this.movieService.searchData("star wars", SearchType.movie);
 
}

}
