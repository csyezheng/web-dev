import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { BearService } from './bear.service';

@Component({
  selector: 'my-bear-list',
  templateUrl: './bear.component.html',
  styleUrls: [ './bear.component.css' ]
})
export class BearComponent implements OnInit {
  newsList: News[];
  selectedHero: News;

  constructor(
    private BearService: BearService,
    private router: Router) { }

  getNewsList(): void {
    this.BearService
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
