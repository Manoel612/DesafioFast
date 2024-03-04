import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollaboratorInterface } from '../interfaces/CollaboratorInterface';
import { ResponseInterface } from '../interfaces/ResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  private apiUrl = `${environment.apiUrl}/Collaborator`
  constructor( private http: HttpClient) { }

  GetAllCollaborators() : Observable<ResponseInterface<CollaboratorInterface[]>>{
    return this.http.get<ResponseInterface<CollaboratorInterface[]>>(this.apiUrl);
  }
  GetOneCollaborator(id: number) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.get<ResponseInterface<CollaboratorInterface>>(`${this.apiUrl}/${id}`);
  }
  PostCollaborators(collaborator : CollaboratorInterface) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.post<ResponseInterface<CollaboratorInterface>>(this.apiUrl, collaborator);
  }
  PutCollaborators(collaborator : CollaboratorInterface) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.put<ResponseInterface<CollaboratorInterface>>(this.apiUrl, collaborator );
  }
  DeleteCollaborators(id: number) : Observable<ResponseInterface<CollaboratorInterface>>{
    return this.http.delete<ResponseInterface<CollaboratorInterface>>(`${this.apiUrl}/${id}`);
  }
}
