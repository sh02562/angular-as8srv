
import { Component, OnInit } from '@angular/core';
import { ResturantService } from 'src/app/services/resturant.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})

export class ResturantDetailsComponent implements OnInit {

  display: boolean = false;
  seeClickValue: number;
  resturantObj: any;
  result: string[] = [];
  constructor(private resturantService: ResturantService) { }

  ngOnInit() {
    this.resturantService.getResturantValue$.subscribe(a => {
      this.seeClickValue = parseInt(a.toString());
      if (!isNaN(this.seeClickValue))
        this.getMyresturantDetails();
    });
  }

  public getMyresturantDetails(): any {
    let id = this.seeClickValue;
    this.display = true;
    this.resturantService.getData().subscribe(data => {
      this.result = data["restaurants"].filter(function (r) {
        return r["id"] == id;
      })
    });
  }

  public closeWindow():void {
    this.display = false;
  }
}
