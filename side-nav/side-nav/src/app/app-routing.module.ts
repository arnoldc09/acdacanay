import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    component: NavbarComponent,
    path: 'navbar',
  },
  {
    component: SearchComponent,
    path:'search/:query'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
