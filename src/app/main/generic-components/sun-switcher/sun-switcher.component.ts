import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LabelsInterface} from '../../../shared/interfaces/labels-interface';

@Component({
    selector: 'app-sun-switcher',
    templateUrl: './sun-switcher.component.html',
    styleUrls: ['./sun-switcher.component.scss']
})
export class SunSwitcherComponent implements OnInit {
    @Input() labelsArray: LabelsInterface[];
    @Output() atSwitch = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    setActiveLabel($event: MouseEvent, label: LabelsInterface) {
        if (label.active) {
            return;
        } else {
            this.labelsArray.forEach((value) => {
                value.active = false;
            });
        }
        label.active = true;
        this.atSwitch.emit(label);
    }
}
