
import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EditDeviceComponent } from './components/edit-device.component';
import { AddDeviceComponent } from './components/add-device.component';
import { EditService } from '../service/edit.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styles: []
})
export class DeviceControlComponent implements OnInit {

  ngOnInit(): void {
    // this.http.get('assets/data/ship-data.json')
    //   .pipe(map(data => data.json()))
    //   .subscribe(data => {
    //     this.users = data;
    //     //console.log(this.users);
    //   });

    this.listOfData = [
      {
        "id": "1",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "2",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "3",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "4",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "5",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "6",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "7",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "8",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "9",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "10",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "11",
        "fault_id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供应管路未通",
        "device_id": "1",
        "device_code": "rycz_20200529_01_sb_01",
        "device_name": "远航01燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
      {
        "id": "12",
        "fault_id": "2",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "device_id": "2",
        "device_code": "rycz_20200529_01_sb_02",
        "device_name": "远航02燃油设备",
        "boat_id": "1",
        "boat_code": "rycz_20200529_01",
        "boat_name": "远航号",
        "time": "2020-05-26 15:10:2",
        "is_deal": 0,
        "is_delete": 0,
      },
    ];
  }
  constructor(private message: NzMessageService, private httpClient: HttpClient,
    private modalService: NzModalService, public router: Router, private editService: EditService) {
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  public navigationSubscription;
  public listOfData: Array<any>;

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: Array<any> = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  public selectedValue = null;
  public inputValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;
  public params;

  deviceList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/device/information';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['deviceList'];

      })
      .catch(this.err);
  }
  delete(id: number[]) {
    const url: string = '/api/device/delete';
    return this.httpClient.post(url, { id: id })
      .toPromise()
      .then(data => {
      })
      .catch(this.err);
  }

  currentPageDataChange($event): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  deleteRow(id: []): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
    console.log(id);
    this.delete(id);
  }
  startEdit(data) {
    this.editService.edit_device = data;
    const modal = this.modalService.create({
      nzTitle: '修改设备信息',
      nzContent: EditDeviceComponent,
      nzWidth: 500,
      nzFooter: null,
    });
  }
  Bigdelete() {
    var deleteid2 = [];
    let deleteid = Object.getOwnPropertyNames(this.mapOfCheckedId);
    for (let i = 0; i < deleteid.length; i++) {
      deleteid2.push(parseInt(deleteid[i]));
    }

    this.modalService.confirm({
      nzTitle: '您确定删除所选设备信息吗?',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.delete(deleteid2);
        this.message.create("success", "删除成功！");
      }
    });
  }
  addUser() {
    const modal = this.modalService.create({
      nzTitle: '添加新设备',
      nzContent: AddDeviceComponent,
      nzWidth: 500,
      nzFooter: null,
    });
  }
  ngOnDestroy(): void {
    // 销毁navigationSubscription，避免内存泄漏
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  search() {
    this.deviceList(this.selectedValue, this.inputValue, null, null);

  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.update();
  }
  update() {
    //this.deviceList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }
}

