import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.scss']
})
export class JsonpComponent implements OnInit {

  items$!: Observable<any[]>;

  constructor(private wiki: WikiService) { }

  ngOnInit(): void {  }

  search(text: string) {
    this.items$ = this.wiki.searchWiki(text);
  }

}
