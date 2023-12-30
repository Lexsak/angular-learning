import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  textColor: string = '#000';
  secondColor: string = '#e66465';
  accentColor: string = '#23D158';

  setMainColor(color: string): void {
    this.accentColor = color;
  }

  setSecondColor(color: string): void {
    this.secondColor = color;
  }

  setAccentColor(color: string): void{
    this.textColor = color;
  }
}
