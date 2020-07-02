
import { Component, ViewChild, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../../data.service'
@Component({
  selector: 'app-fault-type',
  templateUrl: './fault-type.component.html',
  styles: []
})
export class FaultTypeComponent implements OnInit {

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 20,
        "fault_scale": 0.2,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 8,
        "fault_scale": 0.08,
      },
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 7,
        "fault_scale": 0.07,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 13,
        "fault_scale": 0.13,
      },
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 14,
        "fault_scale": 0.14,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 7,
        "fault_scale": 0.07,
      },
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 2,
        "fault_scale": 0.02,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 10,
        "fault_scale": 0.1,
      },
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 6,
        "fault_scale": 0.06,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 3,
        "fault_scale": 0.03,
      },
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "fault_count": 5,
        "fault_scale": 0.05,
      },
      {
        "id": "1",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "fault_count": 5,
        "fault_scale": 0.05,
      },
    ];
    //this.faultTypeStatisticsList(null,null,null,null);
  }
  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  public dateValue = "1";
  public selectedLabel = "近七天故障类型统计";
  public listOfData: Array<any>;

  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;

  faultTypeStatisticsList(find_key: string, find_vaule: string, sort_key: string, sort_value: string, date: string) {
    const url: string = '/api/get/fault/type/statistics/information/table';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value).append("date", date);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['faultTypeStatisticsList'];
        this.dataService.fault_type = this.listOfData;
      })
      .catch(this.err);
  }

  date(values: string): void {
    if (values == '1') {
      this.selectedLabel = "近七天故障类型统计";
    };
    if (values == '2') {
      this.selectedLabel = "近一月故障类型统计";
    };
    if (values == '3') {
      this.selectedLabel = "近一季故障类型统计";
    };
    if (values == '4') {
      this.selectedLabel = "近一年故障类型统计";
    };
    if (values == '5') {
      this.selectedLabel = "全部故障类型统计";
    };
    this.dateValue = values;
    this.update();
  }
  search() {
    this.faultTypeStatisticsList(this.selectedValue, this.inputValue, null, null, this.dateValue);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    this.faultTypeStatisticsList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value, this.dateValue);
  }
}
