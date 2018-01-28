import { Component, EventEmitter, Output, Renderer } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      // route 'enter and leave (<=>)' transition
      transition('* <=> *', [

        // css styles at start of transition
        style({ opacity: 0,
          transform: "translateX(-50%)"
        }),

        // animation and styles at end of transition
        animate('0.4s', style({ opacity: 1,
          transform: "translateX(0)"
        }))
      ])
    ])
    
  ]
})
export class AppComponent {

  constructor(private renderer: Renderer){}

  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  ngOnInit(): void {
  }

   // on page reload, scroll to top of window
  onDeactivate() {
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }


}
