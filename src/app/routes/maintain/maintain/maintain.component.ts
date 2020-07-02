import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styles: []
})
export class MaintainComponent implements OnInit {
  public pdfSrc: string;
  public err;
  constructor(private httpClient: HttpClient) {

  }
  download() {
    this.downapi();
  }
  ngOnInit() {
    //api,返回链接赋给pdfSrc
    //this.logList();
    this.pdfSrc = "../../../../../assets/production-maintain.pdf";
  }
  logList() {
    const url: string = '/api/get/manual/url';

    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        this.pdfSrc = data['data']['url'];

      })
      .catch(this.err);
  }
  downapi() {
    const url: string = '/api/get/manual/upload';

    return this.httpClient.get(url)
      .toPromise()
      .then(data => {

      })
      .catch(this.err);
  }

}
