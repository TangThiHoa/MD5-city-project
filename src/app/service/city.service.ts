import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country";

const API_URL = 'http://localhost:8080'


interface City {
  id?: number;
  name?: string;
  area?: number;
  population?: string;
  gdp?: number;
  description?: string;
  country: Country
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<City[]> {
    return this.httpClient.get<City[]>(`${API_URL}/cities`);
  }

  saveCity(city: any): Observable<City> {
    return this.httpClient.post<City>(API_URL + '/cities', city)
  }

  findById(id: number): Observable<City> {
    return this.httpClient.get<City>(`${API_URL}/cities/${id}`)
  }

  updateCity(id: number, city: City): Observable<City> {
    return this.httpClient.put<City>(`${API_URL}/cities/${id}`, city);
  }

  deleteCity(id: number): Observable<City> {
    return this.httpClient.delete<City>(`${API_URL}/cities/${id}`);
  }

  findByArea(from: number | any, to: number | any): Observable<City> {
    return this.httpClient.get<City>(`${API_URL}/cities/find-by-area?from=${from}&to=${to}`)
  }
}

