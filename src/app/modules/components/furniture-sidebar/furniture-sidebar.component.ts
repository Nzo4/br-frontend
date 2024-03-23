import { Component, Input } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture.model';

@Component({
  selector: 'app-furniture-sidebar',
  templateUrl: './furniture-sidebar.component.html',
})
export class FurnitureSidebarComponent {
  @Input() item!: Furniture;
}
