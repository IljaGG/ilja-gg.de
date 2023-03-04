import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const projects = Array.from(document.querySelectorAll('.project'));
    const imageUrl = '../../assets/img/shadow.png';

    for (let project of projects) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.style.position = 'absolute';
      img.style.width = '100%';
      img.style.bottom = '-16px';
      img.style.zIndex = '-1';
      project.appendChild(img);
    }
  }
}
