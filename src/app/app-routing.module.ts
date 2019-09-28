import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonSearchComponent} from "./person-search/person-search.component";


const routes: Routes = [
  { path: 'list', component: PersonListComponent},
  { path: 'search', component: PersonSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
