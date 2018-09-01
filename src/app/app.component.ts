// Component file: When you generate a component through cli. it generate these 4 files for that component autoly. ts, spec.ts, scss, html

// import component from ....
import { Component } from '@angular/core';


//component decorator
@Component({
  // being refered by <app-root> in index.html 
  // so this component will be put at the app-root part in index.html with all the html, scss, logics of this component
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})//defines important associated stuff with this component.

// all logic about this component will be put here.
export class AppComponent {// put propoties, depenciy injections, defines custom functions, methods, etc.
  title = 'ng6';
}
