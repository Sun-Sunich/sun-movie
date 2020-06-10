import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../../../shared/services/rest.service';
import {LabelsInterface} from '../../../shared/interfaces/labels-interface';
import {IStaffElem} from '../landing.component';

@Component({
    selector: 'app-staff-list',
    templateUrl: './staff-list.component.html',
    styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
    switcherLabels: LabelsInterface[] = [];

    @Input() staff: IStaffElem;

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.showSwitcher();
    }

    public switchToTheaters() {
        this.restService.getTvInTheaters().subscribe(response => {
            this.staff.movies = response.results;
        });
    }

    public switchToOnTv() {
        this.restService.getTvOnTheAir().subscribe(response => {
            this.staff.movies = response.results;
        });
    }

    switchTo(label: LabelsInterface) {
        if (label.dataToShow === 'onTv') {
            this.switchToOnTv();
        }

        if (label.dataToShow === 'inTheaters') {
            this.switchToTheaters();
        }
    }

    private showSwitcher() {
        if (this.staff && this.staff.switchCases) {
            this.staff.switchCases.forEach(
                value => this.switcherLabels.push(
                    {
                        label: value.title,
                        active: value.isActive,
                        dataToShow: value.dataToShow
                    }
                ));
        }
    }
}
