import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturantListComponent } from './modules/resturant-list/resturant-list.component';
import { ResturantDetailsComponent } from './modules/resturant-details/resturant-details.component';


const routes: Routes = [
  // { path: '', redirectTo: 'resturants', pathMatch: 'full' },
  // {
  //   path: 'resturants', component: ResturantListComponent,
  //   children: [
  //     { path: 'resturants-details', component: ResturantDetailsComponent }
  //   ]
  // },
  { path: 'resturants-details', component: ResturantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
