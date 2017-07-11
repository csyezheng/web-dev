import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { News }        from './news';
import { NewsDetailService } from './news-detail.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: [ './news-detail.component.css' ]
})

export class NewsDetailComponent implements OnInit {
  news: News;

  constructor(
    private newsDetailService: NewsDetailService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.newsDetailService.getNews(params.get('article_id')))
      .subscribe(news => this.news = news);
  }

  save(): void {
    this.newsDetailService.update(this.news)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
