import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Productos } from "./productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL = "http://localhost:40664/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return this.httpClient.get<Productos[]>(this.apiURL + 'Products')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getProducto(id): Observable<Productos> {
    return this.httpClient.get<Productos>(this.apiURL + 'Products/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createProducto(producto): Observable<Productos> {
    return this.httpClient.post<Productos>(this.apiURL + 'Products/', JSON.stringify(producto), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateProducto(id, producto): Observable<Productos> {
    return this.httpClient.put<Productos>(this.apiURL + 'Products/' + id, JSON.stringify(producto), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteProducto(id) {
    return this.httpClient.delete<Productos>(this.apiURL + 'Products/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
