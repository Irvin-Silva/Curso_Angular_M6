import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }
        getDataAllPosts(): Observable<any[]> {

            return this.http.get<any[]>(this.apiUrl);
        }

        getDataPostById(id: number): Observable<any> {
            const url = `${this.apiUrl}/${id}`;
            return this.http.get<any>(url);
        }
    }