import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from './news';
import { NeuterService } from './neuter.service';

@Component({
  selector: 'my-neuter-list',
  templateUrl: './neuter.component.html',
  styleUrls: [ './neuter.component.css' ]
})
export class NeuterComponent implements OnInit {
  newsList: News[];
  selectedHero: News;

  constructor(
    private NeuterService: NeuterService,
    private router: Router) { }

  getNewsList(): void {
    this.NeuterService
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
