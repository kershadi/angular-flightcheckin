import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  reservationUrl = 'http://localhost:8080/flightservices/reservations/';
  public reservationData: any;


  constructor(private http: Http) { }

  public getReservation(id: number) {
    return this.http.get(this.reservationUrl + id).pipe(
      map(
        res => {
          this.reservationData = res.json();
          console.log('---> checkin service: reservationData = ', this.reservationData);
        },
        err => {
          console.error(err);
        }
      )
    );
  }

  public checkin(checkInRequest) {
    return this.http.put(this.reservationUrl, checkInRequest).pipe(
      map(
        res => {
          return res.json();
        },
        err => {
          console.error(err);
        }
      )
    );
  }
}
