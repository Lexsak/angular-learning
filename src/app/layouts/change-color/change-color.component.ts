import { Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
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

  constructor(
    private colorService: ColorService,
    private colorCopy: AppComponent
  ) {}

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

  changeSecondaryColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setSecondColor(color);
  }

  changePrimaryColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setPrimaryColor(color);
  }

  // DropDown
  colorPalettes: ColorPalettes[] = [
    { id: 1, name: 'Mono', colors: ['#ffffff', '#dddddd'] },
    { id: 2, name: 'Nono', colors: ['#000000', '#ffffff'] },
    { id: 3, name: 'Hono', colors: ['asfas', 'asfasf'] },
    { id: 4, name: 'Bono', colors: ['asfas', 'asfasf'] },
    { id: 5, name: 'Cono', colors: ['asfas', 'asfasf'] },
  ];

  isDropDown: boolean = false;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (this.isDropDown) {
      const clickedElement = event.target as HTMLElement;

      // Sprawdź czy kliknięcie nie nastąpiło wewnątrz dropdown-container
      if (!clickedElement.closest('.dropdown-container')) {
        this.isDropDown = false;
      }
    }
  }

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
    return this.colorService.backgroundColor;
  }

  getAccentColor() {
    return this.colorService.accentColor;
  }

  getBackgroundColor() {
    return this.colorService.textColor;
  }

  getSecondaryColor() {
    return this.colorService.secondaryColor;
  }

  getPrimaryColor() {
    return this.colorService.primaryColor;
  }

  copyColor() {
    this.colorCopy.isColorCopy = !this.colorCopy.isColorCopy;
  }
}
