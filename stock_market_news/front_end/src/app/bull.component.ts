import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { BullService } from './bull.service';

@Component({
  selector: 'my-newsList',
  templateUrl: './bull.component.html',
  styleUrls: [ './bull.component.css' ]
})
export class BullComponent implements OnInit {
  newsList: News[];
  selectedHero: News;

  constructor(
    private bullService: BullService,
    private router: Router) { }

  getNewsList(): void {
    this.bullService
        .getNewsList()
        .then(newsList => this.newsList = newsList);
  }

  ngOnInit(): void {
    this.getNewsList();
  }

  onSelect(news: News): void {
    this.selectedHero = news;
    this.router.navigate(['/detail', this.selectedHero.article_id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail/', this.selectedHero.article_id]);
  }
}
