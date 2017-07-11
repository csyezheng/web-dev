import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { MajorBullService } from './major-bull.service';

@Component({
  selector: 'my-news',
  templateUrl: './major-bull.component.html',
  styleUrls: [ './major-bull.component.css' ]
})
export class MajorBullComponent implements OnInit {
  newsList: News[];
  selectedNews: News;

  constructor(
    private majorBullService: MajorBullService,
    private router: Router) { }

  getNewsList(): void {
    this.majorBullService
        .getNewsList()
        .then(newsList => this.newsList = newsList);
  }

  ngOnInit(): void {
    this.getNewsList();
  }

  onSelect(news: News): void {
    this.selectedNews = news;
    this.router.navigate(['/detail', this.selectedNews.article_id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail/', this.selectedNews.article_id]);
  }
}
