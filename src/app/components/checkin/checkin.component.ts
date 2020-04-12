import { Component, OnInit } from '@angular/core';
import { CheckinService } from 'src/app/services/checkin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data: any;

  constructor(private service: CheckinService, private router: Router) { }

  ngOnInit() {
    this.data = this.service.reservationData;
  }

  public checkIn(noOfBags: number){
    console.log('----> Enter Module: checkIn');
    const request = {
      id : this.data.id,
      checkIn: true,
      numberOfBags: noOfBags
    };

    console.log('----> checkin request: ', request);
    this.service.checkin(request).subscribe(res => {
      this.router.navigate(['/confirm']);
    });
  }

}
