import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  mainColor: string = '#000';
  secondColor: string = '#555';

  setMainColor(color: string): void {
    this.mainColor = color;
  }

  setSecondColor(color: string): void {
    this.secondColor = color;
  }
}
