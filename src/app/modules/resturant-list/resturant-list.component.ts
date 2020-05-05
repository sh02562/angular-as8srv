import { Component, OnInit } from '@angular/core';
import { ResturantService } from 'src/app/services/resturant.service';
import { Router } from '@angular/router';
import { IRestaurant } from 'src/app/model/IRestaurant';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.scss']
})
export class ResturantListComponent implements OnInit {

  rows: IRestaurant[]=[];
  seeValue: any;  

  constructor(private resturantService: ResturantService, public router: Router) { }

  ngOnInit() {
    this.resturantService.getData().subscribe((data: IRestaurant[]) => {
      debugger;
      this.rows = data['restaurants'];
      });
  }
  seeMyValue(a) {
    this.seeValue = a;
    this.resturantService.myResturantFun(this.seeValue);
  }

}
