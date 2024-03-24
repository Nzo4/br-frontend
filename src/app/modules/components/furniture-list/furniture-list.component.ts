import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture.model';


@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
})
export class FurnitureListComponent {
  @Input() furniture$!: Observable<Furniture[]>;
  @Input() isLoading$!: Observable<boolean>;
  @Input() error$!: Observable<string | null>;
  @Input() furnitureLength!: number;
  currentPage: number = 1;

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getCurrentPageItems(limit: number): Observable<Furniture[]> {
    return this.furniture$.pipe(
      map(furniture => {
        const startIndex = (this.currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        return furniture.slice(startIndex, endIndex);
      })
    );
  }
}
