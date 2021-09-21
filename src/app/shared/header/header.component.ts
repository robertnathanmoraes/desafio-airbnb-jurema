import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  isScreenSmall: Observable<boolean>

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.isScreenSmall = this.breakpointObserver
      .observe([Breakpoints.WebLandscape]).pipe(map(({matches}) => matches))
  }

}
