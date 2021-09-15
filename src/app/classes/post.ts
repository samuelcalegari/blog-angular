export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdDate: Date;

  constructor(title:string, content:string, loveIts:number, createdDate:Date) {

      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.createdDate = createdDate
  }
}
