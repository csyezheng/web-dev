import { Component, OnInit } from '@angular/core';

import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsList()
      .then(newsList => this.newsList = newsList.slice(0, 1000));
  }


}
