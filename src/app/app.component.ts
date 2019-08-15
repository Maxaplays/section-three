import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  name = '';
  dataPassRD = '';
  onNavigate(feature: string) {
  this.loadedFeature = feature;
  }

  printName(event: string) {
    console.log(event);
  }


}
