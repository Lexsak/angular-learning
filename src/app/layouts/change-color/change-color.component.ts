// change-color.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorService } from 'src/app/color.service';

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



  // safasfasf
  @Output() colorSelected = new EventEmitter<string>();
  displayColorPicker = false;

  openColorPicker() {
    this.displayColorPicker = !this.displayColorPicker;
  }

  selectColor(event: any) {
    const selectedColor = event.target.value;
    this.colorSelected.emit(selectedColor);
    this.displayColorPicker = false;
  }
}
