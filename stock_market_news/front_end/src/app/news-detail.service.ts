import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from './news';

@Injectable()
export class NewsDetailService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://192.168.31.46:8000/news_titles/bull_bear';  // URL to web api

  constructor(private http: Http) { }

  getNews(article_id: string): Promise<News> {
    const url = `${this.heroesUrl}/${article_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  delete(article_id: string): Promise<void> {
    const url = `${this.heroesUrl}/${article_id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  update(news: News): Promise<News> {
    // the url must with the slash at the end if use django as backend
    const url = `${this.heroesUrl}/${news.article_id}/`;
    console.log(JSON.stringify(news));
    return this.http
      .put(url, JSON.stringify(news), {headers: this.headers})
      .toPromise()
      .then(() => news)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

