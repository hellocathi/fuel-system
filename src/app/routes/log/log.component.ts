
import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: []
})
export class LogComponent implements OnInit {

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "处理故障，id号：1",
        "created_at": "2020-05-26 15:10:2",

      },
      {
        "id": "1",
        "description": "删除设备，id号：6",
        "created_at": "2020-05-26 15:10:2",

      },
    ];
    //this.logList(null,null,null,null);
  }

  constructor(private httpClient: HttpClient) { }

  public listOfData: Array<any>;
  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;

  logList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/log/information';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['logList'];

      })
      .catch(this.err);
  }
  search() {
    this.logList(this.selectedValue, this.inputValue, null, null);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    this.logList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
}
