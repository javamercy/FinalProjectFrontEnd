import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44311/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath: string = `${this.apiUrl}products/getall`;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath: string = `${this.apiUrl}products/getallbycategoryid?categoryid=${categoryId}`;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
