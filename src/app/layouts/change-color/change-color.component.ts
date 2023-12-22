// change-color.component.ts

import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css'],
})
export class ChangeColorComponent {
  color: string = '#808080';

  constructor(private colorService: ColorService) {}

  changeColor(event: any) {
    const color = event?.target?.value 
    this.colorService.setMainColor(color);
  }
}
