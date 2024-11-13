import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  GetOrderResponse,
  GetOrdersResponse,
  PostOrderBody,
  PostOrderResponse,
} from '../models/order.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiUrl = `${environment.apiUrl}/order`;

  constructor(private http: HttpClient) {}

  addOrder(body: PostOrderBody): Observable<PostOrderResponse> {
    return this.http
      .post<PostOrderResponse>(`${this.apiUrl}`, body, {
        withCredentials: true,
      })
      .pipe(
        tap(({ redirectUri }) => {
          window.location.href = redirectUri;
        })
      );
  }

  getOrder(uuid: string): Observable<GetOrderResponse> {
    const params = new HttpParams().append('uuid', uuid);
    return this.http.get<GetOrderResponse>(`${this.apiUrl}`, {
      params,
    });
  }

  getOrders(): Observable<GetOrdersResponse[]> {
    return this.http.get<GetOrdersResponse[]>(`${this.apiUrl}`, {
      withCredentials: true,
    });
  }
}
