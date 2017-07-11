import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {MajorBullComponent} from './major-bull.component';
import {BullComponent} from './bull.component';
import {NeuterComponent} from './neuter.component';
import {BearComponent} from './bear.component';
import {MajorBearComponent} from './major-bear.component';
import {NewsDetailComponent} from './news-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'major_bull', component: MajorBullComponent},
  {path: 'bull', component: BullComponent},
  {path: 'neuter', component: NeuterComponent},
  {path: 'bear', component: BearComponent},
  {path: 'major_bear', component: MajorBearComponent},
  {path: 'detail/:article_id', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
