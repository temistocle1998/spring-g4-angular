import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { Item } from '../shared/classes/item';
import { RetrouveAllHttpService } from '../shared/services/retrouve-all-http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseService<any> {

  public constructor(public override http: RetrouveAllHttpService) {
    super(http);
    this.prefix = 'items';
   }
}
