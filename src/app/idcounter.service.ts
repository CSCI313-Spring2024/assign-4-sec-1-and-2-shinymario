import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdcounterService {
  private currentId = 0;

  getNextId(): number {
    this.currentId += 1;
    return this.currentId;
  }
}
