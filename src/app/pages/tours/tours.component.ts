import { Component, OnInit } from '@angular/core';
import { ToursListService } from '../../services/tours-list.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  toursList: any;
  title: string;

  constructor(private toursListService: ToursListService) {
    this.toursList = {};
    this.title = '¡Haz de tu experiencia algo único con los mejores Tours Aqueológicos de Cancún y La Riviera Maya';
  }

  ngOnInit() {
    this.toursList = this.toursListService.getToursList();
  }

}
