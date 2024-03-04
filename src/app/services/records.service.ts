import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../interfaces/ResponseInterface';
import { RecordInterface } from '../interfaces/RecordInterface';
import { CollaboratorInterface } from '../interfaces/CollaboratorInterface';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  
  private apiUrl = `${environment.apiUrl}/Record`
  constructor( private http: HttpClient) { }

  GetAllRecords() : Observable<ResponseInterface<RecordInterface[]>>{
    return this.http.get<ResponseInterface<RecordInterface[]>>(this.apiUrl);
  }
  GetOneRecord(id: number) : Observable<ResponseInterface<RecordInterface>>{
    return this.http.get<ResponseInterface<RecordInterface>>(`${this.apiUrl}/${id}`);
  }
  PostRecord(record : RecordInterface) : Observable<ResponseInterface<RecordInterface>>{
    return this.http.post<ResponseInterface<RecordInterface>>(this.apiUrl, record);
  }
  PutRecord(record : RecordInterface) : Observable<ResponseInterface<RecordInterface>>{
    return this.http.put<ResponseInterface<RecordInterface>>(this.apiUrl, record );
  }
  DeleteRecord(id: number) : Observable<ResponseInterface<RecordInterface>>{
    return this.http.delete<ResponseInterface<RecordInterface>>(`${this.apiUrl}/${id}`);
  }
  AddCollaborator(collaboratorId: number, recordId: number) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.post<ResponseInterface<CollaboratorInterface>>(`${this.apiUrl}/${recordId}/AddCollaborator`, collaboratorId);
  }
  RemoveCollaborator(collaboratorId: number, recordId: number) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.put<ResponseInterface<CollaboratorInterface>>(`${this.apiUrl}/${recordId}/RemoveCollaborator`, collaboratorId);
  }
  GetAllCollaboratorsInWorkshop(workshopId: number) : Observable<ResponseInterface<CollaboratorInterface[]>>{
    return this.http.get<ResponseInterface<CollaboratorInterface[]>>(`${this.apiUrl}/GetAllCollaboratorsInWorkshop/${workshopId}`);
  }
}
