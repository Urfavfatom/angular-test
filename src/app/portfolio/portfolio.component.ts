import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  removeClass(member:HTMLDivElement):void{
    member.classList.remove('d-none')

  }
}

