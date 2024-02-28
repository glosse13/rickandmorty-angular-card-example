import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/common/base-service';
import { HttpClient } from '@angular/common/http';
import { ILocation } from '../../../core/models/ILocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService<ILocation> {

constructor(httpClient: HttpClient) {
  super(httpClient);
  this.serviceUrl='location'
}

}
