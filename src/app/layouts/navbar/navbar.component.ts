import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private colorService: ColorService){}

  getBackgroundColor(): string {
    return this.colorService.mainColor;
  }

}
