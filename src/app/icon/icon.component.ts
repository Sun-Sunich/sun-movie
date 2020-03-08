import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-icon',
    template: `
        <svg width="24px" height="24px">
            <use fill="currentColor" attr.xlink:href="/assets/sprites/sprite.svg#{{name}}"></use>
        </svg>`,
    styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() name: string;
}
