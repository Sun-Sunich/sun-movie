import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/interfaces/movie-interface';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    staffList: IStaffElem[] = [];

    constructor() {
    }

    ngOnInit() {
        this.staffList.push(
            {
                title: `What's Popular`,
                switchCases: [
                    {title: 'On TV', dataToShow: 'onTv', isActive: false},
                    {title: 'In Theaters', dataToShow: 'inTheaters', isActive: false}
                ],
            });
    }

}

export interface IStaffElem {
    title?: string;
    switchCases?: {
        isActive: boolean;
        title: string,
        dataToShow: string
    }[];
    movies?: Movie[];
}

