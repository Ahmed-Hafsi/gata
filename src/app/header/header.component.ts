import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss',
  './header.component.css'
]
})
export class HeaderComponent {

  navbarfixed:boolean = false;



  constructor( public change: TranslateService) {
    change.addLangs(['de', 'en', 'fr', 'es']);
    change.setDefaultLang('de');

  }
  changeLanguageTo(lang: string) {
    this.change.use(lang);
  }
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

 
  
}
