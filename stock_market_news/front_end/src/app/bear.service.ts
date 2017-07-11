import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from './news';

@Injectable()
export class BearService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://192.168.31.46:8000/news_titles/bull_bear/bear';  // URL to web api

  constructor(private http: Http) { }

  getNewsList(): Promise<News[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }


  getHero(article_id: string): Promise<News> {
    const url = `${this.heroesUrl}/${article_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

