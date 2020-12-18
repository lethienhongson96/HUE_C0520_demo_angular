import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResult} from "../core/http-result";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResult> {
      return this.http.get<HttpResult>(environment.url_back_end + '/groups')
  }

  delete(id: number): Observable<HttpResult> {
    return this.http.delete<HttpResult>(environment.url_back_end + '/groups/' + id + '/delete')
  }

  create(data): Observable<HttpResult>{
    return this.http.post<HttpResult>(environment.url_back_end + '/groups/store', data);
  }

  edit(data, id): Observable<HttpResult>{
    return this.http.put<HttpResult>(environment.url_back_end + '/groups/' + id, data);
  }

  findById(id): Observable<HttpResult>{
    return this.http.get<HttpResult>(environment.url_back_end + '/groups/' + id);
  }
}
