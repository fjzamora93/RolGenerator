import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, BannerComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

}
