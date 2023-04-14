import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';

@Injectable()
export class ManagerService {

  constructor(private rest: RestService) { }
  get(url: string) {
    return this.rest.get(url)
  }
}
