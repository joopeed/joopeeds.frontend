import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastmusic = '<  <i class="fa fa-spinner"/> loading </i> <i class="fa fa-spotify "></i> >';

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}


  ngOnInit() {
    // Make the HTTP request:
    this.http.get('https://joopeedsblog.appspot.com/api/exposed/recently_played').subscribe(data => {
      // Read the result field from the JSON response.
      this.lastmusic = data[0];
    }, error => {
      this.lastmusic = '< <i class="fa fa-exclamation-circle"/></i>  =( >';
    });
  }

}
