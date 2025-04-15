import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdcounterService {
  private currentId = 0;

  getNextId(): number {
    console.log('Current ID before increment:', this.currentId);
    this.currentId += 1;
    console.log('Current ID after increment:', this.currentId);
    return this.currentId;
  }
}
