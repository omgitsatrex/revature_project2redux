import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }
  getListings(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:9000/listings')
  }
  
  getListingById(id: any): Observable<any[]>{
    return this.http.get<any[]>('' + id);
  }

  deleteListingById(id: any): Observable<any[]>{
    
    return this.http.delete<any[]>('http://localhost:9000/listings/' + id);
    
  }
}
