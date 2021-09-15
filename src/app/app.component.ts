import { Component } from '@angular/core';
import {Post} from "./classes/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';

  posts = [
    new Post('premier post','blabla',1, new Date()),
    new Post('deuxieme post','blabla blabla',0, new Date()),
    new Post('encore un post','blabla blabla blabla',-1, new Date())
  ];
}
