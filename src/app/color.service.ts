import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  textColor: string = '#000';
  backgroundColor: string = '#e66465';
  accentColor: string = '#23D158';
  primaryColor: string = '#FF0000';
  secondaryColor: string = '#00AAFF';

  copyColors: string = '';

  setMainColor(color: string): void {
    this.textColor = color;
  }

  setSecondColor(color: string): void {
    this.backgroundColor = color;
  }

  setAccentColor(color: string): void {
    this.accentColor = color;
  }
  
  setPrimaryColor(color: string): void {
    this.primaryColor = color;
  }

  setSecondaryColor(color: string): void {
    this.secondaryColor = color;
  }
}
