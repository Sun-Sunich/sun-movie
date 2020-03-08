import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../shared/services/rest.service';
import {Movie} from '../../../shared/interfaces/movie-interface';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
    selector: 'app-new-staff',
    templateUrl: './new-staff.component.html',
    styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {
    tvOnTheAirList$: Observable<Movie[]>;

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.tvOnTheAirList$ = this.restService.getTvOnTheAir().pipe(pluck('results'));
    }
}
