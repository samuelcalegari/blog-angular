import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [{
    title : 'Mon premier post',
    content : 'bla bla',
    loveIts : 1,
  },{
    title : 'Mon second post',
    content : 'bla bla bla',
    loveIts : 3,
  },{
    title : 'Encore un post',
    content : 'pour finir ...',
    loveIts : 0,
  }];
}
