import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy-color',
  templateUrl: './copy-color.component.html',
  styleUrls: ['./copy-color.component.css'],
})
export class CopyColorComponent {
  constructor(
    private colorService: ColorService,
    private clipboard: Clipboard
  ) {}

  getBackgroundColor() {
    return this.colorService.textColor;
  }

  getSecondColor() {
    return this.colorService.backgroundColor;
  }

  getAccentColor() {
    return this.colorService.accentColor;
  }

  copyColorContainer: string = '';
  copyColors() {
    this.copyColorContainer = '';
    this.copyColorContainer += `--text: ${this.colorService.textColor}; `;
    this.copyColorContainer += `--background: ${this.colorService.backgroundColor}; `;
    this.copyColorContainer += `--accent: ${this.colorService.accentColor};`;

    this.clipboard.copy(this.copyColorContainer);
    alert('skopiowano kolory do schowka');
  }
}
