import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  lastmusic: string = '<  <i class="fa fa-spinner fa-spin"/></i> loading >';
  onrepeat: string = '<  <i class="fa fa-spinner fa-spin"></i> loading  >'
  series: string = '<a class="series" target="_blank" href="http://www.amc.com/shows/breaking-bad"><i class="fa fa-television"></i> Breaking Bad</a> is probably my favourite TV series of all-time. It should be yours as well <br> ' +
  'Along with <a class="series" target="_blank" href="https://www.netflix.com/title/70178217"><i class="fa fa-television"></i> House of Cards</a> which is completely messed up.'
  when
  shake = false;
  location = false;
  block1selected = false; 
  block2selected = false; 
  block3selected = false; 
  block4selected = false;
  block5selected = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://joopeedsblog.appspot.com/api/exposed/recently_played')
    .subscribe(data => {
      this.lastmusic = '<a class="music" href="' + data[0].link + '"> <i class="fa fa-spotify"></i> ' + data[0].name + ' - ' + data[0].artists + '</a>' 
      this.when = data[0].when;
    }, error => {
      this.lastmusic = '< <i class="fa fa-exclamation-circle"/></i>  =( >';
    });

    this.http.get('https://joopeedsblog.appspot.com/api/exposed/on_repeat')
    .subscribe(data => {
      if (data['on_repeat']) {
        this.onrepeat = 'Music on repeat this last week <a class="onrepeat" href="' + data['music'].link + '"> <i class="fa fa-heart"></i> ' + data['music'].name + ' - ' + data['music'].artists + '</a>'
      } else {
        this.onrepeat = ''
      }

        
    }, error => {
      this.onrepeat = '< <i class="fa fa-exclamation-circle"/></i>  =( >';
    });
  }

  mouseEnter(div : string){
    if(div == 'block1'){
      this.shake = true;
      this.block1selected = true;
    } else if(div == 'block2'){
      this.location = true;
      this.block2selected = true;
    } else if(div == 'block3'){
      this.block3selected = true;
    } else if(div == 'block4'){
      this.block4selected = true;
    } else if(div == 'block5'){
      this.block5selected = true;
    }
  }

  mouseLeave(div : string){
    if(div == 'block1'){
      this.shake = false;
      this.block1selected = false;
    } else if(div == 'block2'){
      this.location = false;
      this.block2selected = false;
    } else if(div == 'block3'){
      this.block3selected = false;
    } else if(div == 'block4'){
      this.block4selected = false;
    } else if(div == 'block5'){
      this.block5selected = false;
    }
  }

}
