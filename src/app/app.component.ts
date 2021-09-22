import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'desafio-airbnb-jurema';
  tags = [{name: 'Dates'}, {name: 'Guests'}, {name: 'Work trip'}, {name: 'Type of place'}, {name: 'Price'}, {name: 'Instant Book'}];
  card = [
    {
      plus: true,
      image: [{image: 'https://a0.muscache.com/im/pictures/c9c9666d-b703-4814-9db6-de91c3b682a0.jpg?im_w=480'}, {image: 'https://a0.muscache.com/im/pictures/miso/Hosting-19140555/original/bbbde631-db06-4171-9283-d0f2b2a224cf.jpeg?im_w=480'}],
      type: 'Entire guesthouse',
      title: 'Charmant petit studio perisien au coeur du Marais, etc text',
      hotelTitle: 'Entire guesthouse',
      guest: '2',
      studio: true,
      beds: '1',
      bath: '1',
      rate: '4.73',
      quantityRate: '202',
      price: 'R$365',
      tags: [{name: 'wifi'}, {name: 'kitchen'}, {name: 'Heating'}]
    },
    {
      plus: false,
      image: [{image: 'https://a0.muscache.com/im/pictures/c9c9666d-b703-4814-9db6-de91c3b682a0.jpg?im_w=480'}, {image: 'https://a0.muscache.com/im/pictures/miso/Hosting-19140555/original/bbbde631-db06-4171-9283-d0f2b2a224cf.jpeg?im_w=480'}],
      type: 'Entire guesthouse',
      title: 'Champs-Élysées Golden triangle flat with mezzanine',
      hotelTitle: 'Entire guesthouse',
      guest: '2',
      studio: true,
      beds: '0',
      bath: '1',
      rate: '4.61',
      quantityRate: '194',
      price: 'R$365',
      tags: [{name: 'wifi'}, {name: 'kitchen'}, {name: 'Heating'}]
    },
  ];
  markers = [
    { address: 'Av ipiranga 7464 Porto Alegre', lat: 51.02002, lng: 51.02342 },
    { address: 'Rua monte carlo 686 viamão', lat: 54.02002, lng: 54.02342 },
    { address: 'Av ipiranga 2321 Porto Alegre', lat: 56.02002, lng: 56.02342 }
  ];
  lat = 51.02002
  lng = 51.02342

  constructor(
    public matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    matIconRegistry.addSvgIcon(
      'star',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/star.svg')
    );
  }

  ngOnInit(): void {

  }


}
