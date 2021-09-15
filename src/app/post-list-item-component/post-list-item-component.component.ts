import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post : any

  constructor() { }

  ngOnInit(): void {
  }

  getState() {
    if(this.post.loveIts > 0 ) return 'list-group-item-success';
    if(this.post.loveIts < 0 ) return 'list-group-item-danger';
    return 'list-group-item-default';
  }

  increase(){
    this.post.loveIts++;
  }

  decrease(){
    this.post.loveIts--;
  }

}
