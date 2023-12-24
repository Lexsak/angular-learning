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

  changeMainColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setMainColor(color);
  }

  changeSecondColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setSecondColor(color);
  }

  options = ['Opcja 1', 'Opcja 2', 'Opcja 3'];
  selectedOption: string = '';

  onOptionSelected(event: any) {
    const value = event?.target?.value;
    this.selectedOption = value;
  }
}
