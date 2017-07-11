import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { MajorBearService } from './major-bear.service';

@Component({
  selector: 'my-news',
  templateUrl: './major-bear.component.html',
  styleUrls: [ './major-bear.component.css' ]
})
export class MajorBearComponent implements OnInit {
  newsList: News[];
  selectedHero: News;

  constructor(
    private heroService: MajorBearService,
    private router: Router) { }

  getNewsList(): void {
    this.heroService
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
