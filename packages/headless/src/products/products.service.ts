import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Product } from 'src/types/product.type';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  getAllProducts(): Observable<AxiosResponse<Product[]>> {
    return this.httpService
      .get('https://fakestoreapi.com/products')
      .pipe(map((response) => response.data));
  }
}
