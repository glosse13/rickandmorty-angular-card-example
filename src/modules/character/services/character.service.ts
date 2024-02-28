import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/common/base-service';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../../../core/models/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService<ICharacter> {

constructor(httpClient: HttpClient) {
  super(httpClient);
  this.serviceUrl='character';
 }

}
