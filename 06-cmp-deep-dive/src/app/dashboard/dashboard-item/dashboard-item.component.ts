import {Component, input} from '@angular/core';
import {DashboardItemModel} from "./dashboard-item.model";

@Component({
    selector: 'app-dashboard-item',
    standalone: true,
    imports: [],
    templateUrl: './dashboard-item.component.html',
    styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {

    image = input.required<DashboardItemModel>();
    title = input.required<string>();
}
