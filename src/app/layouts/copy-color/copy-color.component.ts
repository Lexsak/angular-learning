import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-copy-color',
  templateUrl: './copy-color.component.html',
  styleUrls: ['./copy-color.component.css'],
})
export class CopyColorComponent {
  constructor(private colorService: ColorService) {}

  getBackgroundColor() {
    return this.colorService.textColor;
  }

  getSecondColor() {
    return this.colorService.backgroundColor;
  }

  getAccentColor() {
    return this.colorService.accentColor;
  }
}
