import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country";

const API_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(API_URL + '/countries');
  }

  savaCity(country: any): Observable<Country> {
    return this.httpClient.post<Country>(API_URL + '/countries', country);
  }

  findById(id: number): Observable<Country> {
    return this.httpClient.get<Country>(`${API_URL}/countries/${id}`);
  }

  updateCity(id: number, country: Country): Observable<Country> {
    return this.httpClient.put<Country>(`${API_URL}/countries/${id}`, country);
  }

  deleteCity(id: number): Observable<Country> {
    return this.httpClient.delete<Country>(`${API_URL}/countries/${id}`);
  }
}

