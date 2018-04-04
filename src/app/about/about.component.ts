import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ArtComponent } from '../art/art.component';
import { DesignComponent } from '../design/design.component';
import { CodeComponent } from '../code/code.component';
import { GamingComponent } from '../gaming/gaming.component';
import { websiteUrl } from '../_services/baseUrl/httpBaseUrl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  artPage(){
    window.location.href = websiteUrl + "/about/art";
  }
  codePage(){
    window.location.href = websiteUrl + "/about/code";
  }
  designPage(){
    window.location.href = websiteUrl + "/about/design";
  }
  gamingPage(){
    window.location.href = websiteUrl + "/about/gaming";
  }

}
