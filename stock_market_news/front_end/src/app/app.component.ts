import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">主页</a>
      <a routerLink="/major_bull" routerLinkActive="active">重大利好</a>
      <a routerLink="/bull" routerLinkActive="active">利好</a>
      <a routerLink="/neuter" routerLinkActive="active">中性</a>
      <a routerLink="/bear" routerLinkActive="active">利空</a>
      <a routerLink="/major_bear" routerLinkActive="active">重大利空</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '个股新闻';
}
