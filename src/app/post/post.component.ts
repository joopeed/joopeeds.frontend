import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

   post:any = {
         "title":"asuiha",
         "link":"https://medium.com/@joopeeds/asuiha-de1333fdd5ac?source=rss-2dad8d1d3db3------2",
         "guid":{
            "@isPermaLink":"false",
            "#text":"https://medium.com/p/de1333fdd5ac"
         },
         "dc:creator":"Jo\u00e3o Pedro Le\u00f4ncio",
         "pubDate":"Wed, 24 Jan 2018 10:55:09 GMT",
         "atom:updated":"2018-01-24T10:55:09.582Z",
         "content:encoded":"<p>sjhas</p><img src=\"https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=de1333fdd5ac\" width=\"1\" height=\"1\">"
      };
   id = 1;

   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient, private route: ActivatedRoute) {}


   ngOnInit() {
     this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        // Make the HTTP request:
        this.http.get('https://joopeedsblog.appspot.com/api/medium_posts/' + params['id']).subscribe(data => {
          // Read the result field from the JSON response.
          this.post = data;
        }, error => {
          this.post = {};
        });
     });
  }  
     
     
     


}
