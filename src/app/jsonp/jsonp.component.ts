import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent implements OnInit {

  items: any[] = [];

  constructor(private wiki: WikiService) { }

  ngOnInit(): void {
  }

  search(text: string) {
    this.wiki.searchWiki(text).subscribe({
      next: res => this.items = res,
      error: (err) => console.log(err)
    });
  }

}
