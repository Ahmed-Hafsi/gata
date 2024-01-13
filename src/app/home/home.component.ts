import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

partnersArray:any=[
  {
    imgName:"assets/img/imageclient1.jpg"
  },
  {
    imgName:"assets/img/imageclient2.png"
  },
  {
    imgName:"assets/img/imageclient3.jpg"
  },
  {
    imgName:"assets/img/imageclient1.jpg"
  },
  {
    imgName:"assets/img/imageclient2.png"
  },
  {
    imgName:"assets/img/imageclient3.jpg"
  }
]

sliderOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:4500,
	smartSpeed:300,
  autoplayHoverPause:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 1
    }
  },
  nav: true
};

portfolioOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:4500,
  smartSpeed:300,
  autoplayHoverPause:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items:0
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
};

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:4500,
		smartSpeed:300,
		autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
