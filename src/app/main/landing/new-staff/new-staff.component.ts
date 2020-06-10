import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../shared/services/rest.service';
import {Movie} from '../../../shared/interfaces/movie-interface';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';
import {LabelsInterface} from '../../../shared/interfaces/labels-interface';

@Component({
    selector: 'app-new-staff',
    templateUrl: './new-staff.component.html',
    styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {
    popularMovies$: Observable<Movie[]>;
    /*tvOnTheAirList$: Observable<Movie[]>;
    movieInTheaters$: Observable<Movie[]>;*/
    whereToWatch: LabelsInterface[];

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.switchToOnTv();
        this.whereToWatch = [{
            label: 'on TV',
            active: true
        }, {
            label: 'In Theaters',
            active: false
        }];
    }

    public switchToTheaters() {
        this.popularMovies$ = this.restService.getTvInTheaters().pipe(pluck('results'));
    }

    public switchToOnTv() {
        this.popularMovies$ = this.restService.getTvOnTheAir().pipe(pluck('results'));
    }

    switchTo(label: LabelsInterface) {
        if (label.label === 'on TV') {
            this.switchToOnTv();
        }

        if (label.label === 'In Theaters') {
            this.switchToTheaters();
        }
    }
}
