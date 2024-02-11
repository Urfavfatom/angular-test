import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  removeClass(){
    document.getElementsByClassName('.light-container')[0].classList.remove('d-none');
  }
}

