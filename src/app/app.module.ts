import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import { BrowserModule } from '@angular/platform-browser';
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {CarouselModule} from "angular-bootstrap-md";
import { AgmCoreModule } from '@agm/core';
import { MapButtonComponent } from './shared/components/map-button/map-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapButtonComponent
  ],
  imports: [
    CommonModule,
    // Material

    BrowserModule,
    HttpClientModule,

    ReactiveFormsModule,
    FormsModule,

    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,

    MatTooltipModule,
    // BrowserModule.withServerTransition({appId: 'serverApp'}),
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC44hOYImnUIvVPzypPgRcilRsy-Wx8kNo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
