import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategory } from '../models/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  getAllSubcategories(categorySlug: string): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`/api/${categorySlug}/subcategory`);
  }
}
