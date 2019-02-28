import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToursListService {
  private tours: any[] = [
    {
      id: 1,
      name: 'Zonas arqueológicas',
      image: '../../../assets/images/xenotes.jpg',
      text: 'Sed facilisis lobortis ex non sollicitudin. Nulla facilisi. Etiam at velit pretium.',
      regularPrice: '$0,000 MXN',
      onlinePrice: '$0,000 MXN'
    },
    {
      id: 2,
      name: 'Zonas arqueológicas',
      image: '../../../assets/images/xenotes.jpg',
      text: 'Sed facilisis lobortis ex non sollicitudin. Nulla facilisi. Etiam at velit pretium.',
      regularPrice: '$0,000 MXN',
      onlinePrice: '$0,000 MXN'
    }
  ];

  getToursList() {
    return this.tours;
  }
}
