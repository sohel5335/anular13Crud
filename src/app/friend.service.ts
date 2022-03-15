import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private basePath:string="https://localhost:44356/api/Friend";
  constructor(private http:HttpClient) { }
  save(friend:any):Observable<any>
  {
  
    return this.http.post(this.basePath,friend);
  }
  get(id:any):Observable<any>
  {
    let queryParams = new HttpParams;
    queryParams=queryParams.append("Id",id);
    return this.http.get(this.basePath,{params:queryParams});
  }
  Delete(id:any):Observable<any>
  {
    let queryParams = new HttpParams;
    queryParams=queryParams.append("Id",id);
    return this.http.delete(this.basePath,{params:queryParams});
  }
}
