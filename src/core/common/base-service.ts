import { EventEmitter } from '@angular/core';
import { IEntity } from '../models/IEntity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T extends IEntity> {
  reloadReqired: EventEmitter<void>;
  protected serviceUrl: string;
  constructor(protected httpClient: HttpClient) {
    this.reloadReqired = new EventEmitter();
    this.serviceUrl = '';
  }
  find(addUrl:string = ""): Observable<any> {
    return this.httpClient.get(
      `${this.serviceUrl}${addUrl == null ? '' : addUrl}`
    ) as Observable<any>;
  }
  getById(id: number): Observable<any> {
    return this.httpClient.get(this.serviceUrl + `/${id}`) as Observable<any>;
  }
}
