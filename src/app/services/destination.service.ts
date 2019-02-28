import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: any[] = [
    {
      id: 1,
      title: 'Zonas arqueológicas',
      image: '../../../assets/images/xenotes.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum mauris sed eros commodo, at porta ipsum viverra. In faucibus tellus ut est efficitur, at aliquet lectus mollis. Cras ac varius arcu, et mollis nisl. Phasellus non euismod purus, nec suscipit nisi. Nunc non dui sed velit mattis rutrum quis at justo. Sed commodo quam sit amet ipsum ultricies, at convallis nulla pretium. Nunc mollis a lacus sit amet mollis.'
    },
    {
      id: 2,
      title: 'Zonas arqueológicas',
      image: '../../../assets/images/xenotes.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum mauris sed eros commodo, at porta ipsum viverra. In faucibus tellus ut est efficitur, at aliquet lectus mollis. Cras ac varius arcu, et mollis nisl. Phasellus non euismod purus, nec suscipit nisi. Nunc non dui sed velit mattis rutrum quis at justo. Sed commodo quam sit amet ipsum ultricies, at convallis nulla pretium. Nunc mollis a lacus sit amet mollis.'
    }
  ];

  getDestinations() {
    return this.destinations;
  }
}
