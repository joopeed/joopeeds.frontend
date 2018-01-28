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
         "title":"Post Title",
         "link":"https://medium.com/@joopeeds/asuiha-de1333fdd5ac",
         "guid":{
            "@isPermaLink":"false",
            "#text":"https://medium.com"
         },
         "dc:creator":"Jo\u00e3o Pedro Le\u00f4ncio",
         "pubDate":"Wed, 24 Jan 2018 10:55:09 GMT",
         "atom:updated":"2018-01-24T10:55:09.582Z",
         "content:encoded":""
      };

   id: string;

   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient, private route: ActivatedRoute) {}


   ngOnInit() {
     this.id = this.route.snapshot.params.id;
     this.http.get('https://joopeedsblog.appspot.com/api/medium_posts/' + this.id).subscribe(data => {
          // Read the result field from the JSON response.
          this.post = data;
        }, error => {
          this.post = {};
     });

    //  this.route.params.subscribe((params: Params) => {
    //     this.id = params['id'];
    //     // Make the HTTP request:
    //     this.http.get('https://joopeedsblog.appspot.com/api/medium_posts/' + params['id']).subscribe(data => {
    //       // Read the result field from the JSON response.
    //       this.post = data;
    //     }, error => {
    //       this.post = {};
    //     });
    //  });
  }  
     
     
     


}
