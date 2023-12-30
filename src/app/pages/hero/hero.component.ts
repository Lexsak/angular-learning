import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  constructor(private colorService: ColorService) {}

  getSecondColor() {
    return this.colorService.backgroundColor;
  }

  getAccentColor(){
    return this.colorService.accentColor;
  }
}
