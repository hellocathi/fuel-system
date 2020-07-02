import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styles: []
})
export class HomeManageComponent implements OnInit {
  public data: Array<any>;
  public err;
  constructor(private httpClient: HttpClient, ) {

  }
  dataOverview() {
    const url: string = '/api/get/overview';
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        this.data = data['data']['dataOverview'];

      })
      .catch(this.err);
  }

  ngOnInit() {


    this.data = [
      { "boat_total": 30 },
      { "device_total": 50 },
      { "fault_type_total": 13 },
      { "fault__total": 42 },
      { "warning_total": 10 }
    ];

    //this.dataOverview();

  }

}
