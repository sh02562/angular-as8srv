import { Component, OnInit } from '@angular/core';
import { ResturantService } from 'src/app/services/resturant.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title = 'advMock2';
  markers: any;
  lat: number = 17.4435;
  lng: number = 78.3772;
  myMarkerId: number;
  previous: any;
  idValue: number;

  constructor(public resturantService: ResturantService) { }

  ngOnInit() {
    this.resturantService.getResturantValue$.subscribe(a => {
      this.idValue = parseInt(a.toString());
      this.showOnMap()
    });
  }
  public showOnMap(): void {
      this.resturantService.getData().subscribe(data => {
      this.markers = data['restaurants']
    })
  }

  public mouseOverCalled(markerId): void {
    this.myMarkerId = markerId
    if (this.previous) {
      this.previous.close();
    }
    this.previous = this.idValue;
  }

  public openMyWindow(id): any {
    return this.idValue == id;
  }

}
