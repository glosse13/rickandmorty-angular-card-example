import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/common/base-service';
import { HttpClient } from '@angular/common/http';
import { IEpisode } from '../../../core/models/IEpisode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService extends BaseService<IEpisode> {

constructor(httpClient: HttpClient) {
  super(httpClient);
  this.serviceUrl='episode'
}

}
