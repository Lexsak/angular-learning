import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

export interface ColorPalettes {
  id: number;
  name: string;
  colors: string[];
}

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css'],
})
export class ChangeColorComponent {
  color: string = '#808080';

  constructor(private colorService: ColorService) {}

  changeMainColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setMainColor(color);
  }

  changeSecondColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setSecondColor(color);
  }

  changeAccentsColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setAccentColor(color);
  }

  // DropDown
  colorPalettes: ColorPalettes[] = [
    { id: 1, name: 'Mono', colors: ['#ffffff', '#ddd'] },
    { id: 2, name: 'Nono', colors: ['#ddd', '#ffffff'] },
    { id: 3, name: 'Hono', colors: ['asfas', 'asfasf'] },
    { id: 4, name: 'Bono', colors: ['asfas', 'asfasf'] },
    { id: 5, name: 'Cono', colors: ['asfas', 'asfasf'] },
  ];
  isDropDown: boolean = false;

  changeDropDown() {
    this.isDropDown = !this.isDropDown;
  }

  changeColor(hax1: string, hax2: string) {
    this.colorService.setMainColor(hax1);
    this.colorService.setSecondColor(hax2);
    this.isDropDown = false;
  }

  // Get color Values to inputs
  getSecondColor() {
    return this.colorService.secondColor;
  }

  getAccentColor() {
    return this.colorService.accentColor;
  }

  getBackgroundColor() {
    return this.colorService.mainColor;
  }
}
