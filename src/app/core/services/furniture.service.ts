import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  getAllFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>('/api/furniture');
  };

  getOneFurniture(furnitureSlug: string): Observable<Furniture> {
    return this.http.get<Furniture>(`/api/furniture/${furnitureSlug}`);
  };

  getAllFurnitureFromCategory(categorySlug: string): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(`/api/${categorySlug}/furniture`);
  }

  getAllFurnitureFromSubcategory(categorySlug: string, subcategorySlug: string): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(`/api/${categorySlug}/${subcategorySlug}/furniture`);
  }


}
