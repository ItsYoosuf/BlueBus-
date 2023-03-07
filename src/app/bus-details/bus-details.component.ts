import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent {
  @Input() bus: any;
  get busNumber(): string {
    return this.bus.number;
  }
  get driverName(): string {
    return this.bus.driver;
  }
  get busRoute(): string {
    return this.bus.route;
  }
  get feeDetails(): string {
    return this.bus.fees;
  }
}
