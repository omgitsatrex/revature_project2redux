import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {

  constructor(private http: HttpClient) { }
  getListings(): Observable<any[]>{
    return this.http.get<any[]>('')
  }
  
  getListingById(id: any): Observable<any[]>{
    return this.http.get<any[]>('' + id);
  }
}
