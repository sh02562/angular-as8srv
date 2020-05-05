import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRestaurant} from '../model/IRestaurant';
@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  myURL: string = '../../assets/shared/resturantInfo.json';
  resturantValue = new BehaviorSubject({});
  getResturantValue$ = this.resturantValue.asObservable();

  constructor(private http: HttpClient) { }

  public getData(): Observable<IRestaurant[]> {
    // return this.http.get<IRestaurant[]>(this.myURL).pipe(map(d=>{return d["restaurants"];}));
    // we can call array when we are getting url values 
    return this.http.get<IRestaurant[]>(this.myURL);
  }

  public myResturantFun(restroID):void {
    this.resturantValue.next(restroID);
  }
}
