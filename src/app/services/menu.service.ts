import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getVegMenu(): Observable <any>{
    return this.http.get('http://localhost:8080/vegmenu');
  }
  getNonVegMenu():Observable<any>{
    return this.http.get(`http://localhost:8080/nonvegmenu`);
  }
}
