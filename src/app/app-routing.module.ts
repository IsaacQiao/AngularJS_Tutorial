// this is here because we used routing flag when init through AngularCLI
// add routing config here.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import the components we want to route
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [ // in this routes array, we defines all out routes
  {// each route will take a path
    // init path, the path that loads that the app load. like a /
    path: '', 
    // tell us which component will reside at this path
    component:  UsersComponent
  },
  {
    path: 'details/:id', 
    component:  DetailsComponent
  },
  {
    path: 'posts', 
    component:  PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
