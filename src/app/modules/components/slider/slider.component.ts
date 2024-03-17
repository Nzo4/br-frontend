import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  images: string[] = [
    'https://www.home-designing.com/wp-content/uploads/2022/09/modern-orange-living-room.jpg',
    'https://www.coasterfurniture.com/wp-content/uploads/living-room-with-black-furniture.jpeg',
    'https://homedecorbliss.com/wp-content/uploads/2019/01/A-huge-and-spacious-living-room-with-huge-windows-a-gray-sectional-sofa-and-a-modern-chandelier-1024x683.jpg'

  ] // Будет измененно логикой из бекенд
  currentImageIndex: number = 0;

  clickOnBack() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  clickOnForward() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  clickOn(index: number) {
    this.currentImageIndex = index;
  }

}
