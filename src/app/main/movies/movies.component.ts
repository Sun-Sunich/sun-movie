import {Component, OnInit} from '@angular/core';
import {RestService} from '../../shared/services/rest.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: any;
    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.restService.getLatestMovies().subscribe((response) => {
            this.movies = response;
        });
    }

}
