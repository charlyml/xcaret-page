import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations: any;
  constructor(private destinationService: DestinationService) {
    this.destinations = {};
  }

  ngOnInit() {
    this.destinations = this.destinationService.getDestinations();
  }

}
