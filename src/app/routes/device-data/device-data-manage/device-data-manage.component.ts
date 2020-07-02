import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data-manage.component.html',
  styles: []
})
export class DeviceDataManageComponent implements OnInit {

  ngOnInit(): void {
    // this.http.get('assets/data/device-data.json')
    //   .pipe(map(data => data.json()))
    //   .subscribe(data => {
    //     this.users = data;
    //     //console.log(this.users);
    //   });

    // this.listOfData = [
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "1",
    //     "device_code": "rycz_20200529_01_sb_01",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },
    //   {
    //     "id": "1",
    //     "boat_id": "1",
    //     "boat_code": "rycz_20200529_01",
    //     "boat_name": "远航号",
    //     "device_id": "2",
    //     "device_code": "rycz_20200529_01_sb_02",
    //     "device_name": "远航01燃油设备",
    //     "data": "23个数据字段",
    //     "time": "2020-05-26 15:10:20",
    //     "is_delete": 0,
    //   },

    // ];
    this.rawDataList(null, null, null, null);
    for (let i = 0; i < this.listOfData.length; ++i) {
      this.listOfData[i].expend = false;
    }
  }


  public listOfData: Array<any>;
  public selectedValue = null;
  public inputValue = null;
  public err;
  constructor(private httpClient: HttpClient, ) { }

  rawDataList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/raw/data/';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['rawDataList'];

      })
      .catch(this.err);

  }

  search() {
    this.rawDataList(this.selectedValue, this.inputValue, null, null);

  }
  sort(info) {
    this.rawDataList(this.selectedValue, this.inputValue, info.key, info.value);
  }
}
