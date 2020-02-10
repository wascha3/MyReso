
import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Subscription, Observable } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  media$: Observable<MediaChange> ;
    watcher: Subscription;
    constructor(public mediaObserver: MediaObserver) {
      this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          this.opened = false;
          this.over = 'over';
        } else {
          this.opened = true;
          this.over = 'side';
        }
      });
    }

  ngOnInit() {
  }


}
