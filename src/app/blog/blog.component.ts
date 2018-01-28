import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
  
})
export class BlogComponent implements OnInit {

   posts:any = [];

   // Inject HttpClient into your component or service.
   constructor(private http: HttpClient) {}


   ngOnInit() {
            // Make the HTTP request:
          this.http.get('https://joopeedsblog.appspot.com/api/medium_posts').subscribe(data => {
            // Read the result field from the JSON response.
            this.posts = data;
          }, error => {
            this.posts = '< <i class="fa fa-exclamation-circle"/></i>  =( >' + JSON.stringify(error);
          });
        
     
     
     
   }

}
