import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  mainColor: string = '#000';

  setMainColor(color: string): void {
    this.mainColor = color;
  }
}
