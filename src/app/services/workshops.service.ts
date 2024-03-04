import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../interfaces/ResponseInterface';
import { WorkshopInterface } from '../interfaces/WorkshopInterface';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {
  private apiUrl = `${environment.apiUrl}/Workshop`
  constructor( private http: HttpClient) { }

  GetAllWorkshops() : Observable<ResponseInterface<WorkshopInterface[]>>{
    return this.http.get<ResponseInterface<WorkshopInterface[]>>(this.apiUrl);
  }
  GetOneWorkshop(id: number) : Observable<ResponseInterface<WorkshopInterface>>{
    return this.http.get<ResponseInterface<WorkshopInterface>>(`${this.apiUrl}/${id}`);
  }
  PostWorkshop(workshop : WorkshopInterface) : Observable<ResponseInterface<WorkshopInterface>>{
    return this.http.post<ResponseInterface<WorkshopInterface>>(this.apiUrl, workshop);
  }
  PutWorkshop(workshop : WorkshopInterface) : Observable<ResponseInterface<WorkshopInterface>>{
    return this.http.put<ResponseInterface<WorkshopInterface>>(this.apiUrl, workshop );
  }
  DeleteWorkshop(id: number) : Observable<ResponseInterface<WorkshopInterface>>{
    return this.http.delete<ResponseInterface<WorkshopInterface>>(`${this.apiUrl}/${id}`);
  }
}
