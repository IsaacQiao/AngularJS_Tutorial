// TODO: google what is type script. (should be same as JS)
// when we import new component from angularJS, the AngularCLI will auto update this file to import and add them here. -> ng-model decorator
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [ // declarations array. CLI will put COMPONENT here. 
    AppComponent, SidebarComponent
  ],
  imports: [ // imports array. we put imports in here. exp: http client lib, animation lib, etc.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
