import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pillars',
  templateUrl: './pillars.component.html',
  styleUrls: ['./pillars.component.scss'],
})
export class PillarsComponent implements OnInit {
  bgImage = 'url("../../../assets/images/teambanner.png';
  title: string = 'Strategic Pillars';

  pillars = [
    {
      id: 1,
      title: 'Increasing the demand for impact capital ',
      url: 'increase-demand',
      image: '',
    },
    {
      id: 2,
      title: 'Increasing and deepening the supply of impact capital ',
      url: 'increase-demand-supply',
      image: '',
    },
    {
      id: 3,
      title: 'Promoting impact investing regulatory and policy framework',
      url: 'promote-policy',
      image: '',
    },
    {
      id: 4,
      title: 'Promoting the number & effectiveness of intermediaries ',
      url: 'promote-intermediaries',
      image: '',
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
