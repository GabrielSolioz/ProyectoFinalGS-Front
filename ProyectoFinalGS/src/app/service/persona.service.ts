import { Injectable } from '@angular/core';
import { Persona } from '../model/persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URl + '/personas/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL+'lista');
  }

  public detail(id:number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+`detail/${id}`);
  }

  public update(id:number, educacion: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, educacion);
  }
  /*
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL+`create`, educacion);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }
  */
}
