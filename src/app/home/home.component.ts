import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  lastmusic: string = '<  <i class="fa fa-spinner"/> loading </i> <i class="fa fa-spotify"></i> >';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://joopeedsblog.appspot.com/api/exposed/recently_played')
    .subscribe(data => {
      this.lastmusic = '<a class="music" href="' + data[0].link + '"> <i class="fa fa-spotify"></i> ' + data[0].name + ' - ' + data[0].artists + '</a>'
    }, error => {
      this.lastmusic = '< <i class="fa fa-exclamation-circle"/></i>  =( >';
    });
  }

}
