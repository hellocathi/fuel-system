
import { Component, ViewChild, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../../data.service'
@Component({
  selector: 'app-ship-fault',
  templateUrl: './ship-fault.component.html',
  styles: []
})
export class ShipFaultComponent implements OnInit {

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
      {
        "id": "2",
        "boat_code": "rycz_20200529_02",
        "boat_name": "神舟号",
        "fault_boat_count": 20,
        "fault_boat_scale": 0.3,
      },
    ];
    //this.boatList(null,null,null,null);
  }
  constructor(private httpClient: HttpClient, private dataService: DataService) { }


  public dateValue = "1";
  public selectedLabel = "近七天故障统计";
  public listOfData: Array<any>;

  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;

  boatList(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: string) {
    const url: string = '/api/get/fault/boat/statistics/information';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value).append("date", date);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['boatList'];
        this.dataService.ship_fault = this.listOfData;
      })
      .catch(this.err);
  }

  date(values: string): void {
    if (values == '1') {
      this.selectedLabel = "近七天故障统计";
    };
    if (values == '2') {
      this.selectedLabel = "近一月故障统计";
    };
    if (values == '3') {
      this.selectedLabel = "近一季故障统计";
    };
    if (values == '4') {
      this.selectedLabel = "近一年故障统计";
    };
    if (values == '5') {
      this.selectedLabel = "全部故障统计";
    };
    this.dateValue = values;
    this.update();
  }

  search() {
    this.boatList(this.selectedValue, this.inputValue, null, null, this.dateValue);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    this.boatList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value, this.dateValue);
  }

}
