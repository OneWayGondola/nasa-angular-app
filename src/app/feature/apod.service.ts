import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private apiKey: string = '';

  constructor(private http: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.http.get<Apod>(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);
  }
}
