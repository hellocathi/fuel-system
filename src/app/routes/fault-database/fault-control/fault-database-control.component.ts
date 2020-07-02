import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddFaultComponent } from './components/add-fault.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../data.service'
@Component({
  selector: 'app-fault-control',
  templateUrl: './fault-database-control.component.html',
  styles: []
})
export class FaultControlComponent implements OnInit {
  public listOfData: Array<any>;

  ngOnInit(): void {
    this.listOfData = [
      {
        "id": "1",
        "fault_code": "abn-p-01",
        "fault_name": "供油管路未通",
        "algorithm": "故障算法模型",
        "reason": "供油管路未通",
        "feature": "P1不在正常工作范围内",
        "method": "检查油仓到燃油供应单元间阀门状态",
        "time": "2020-05-26 15:10:2",
        "is_delete": 0
      },
      {
        "id": "3",
        "fault_code": "abn-p-03",
        "fault_name": "滤芯堵塞",
        "algorithm": "故障算法模型",
        "reason": "滤芯堵塞",
        "feature": "P3-P1超出设定值",
        "method": "切换备用粗滤器，清洗滤芯",
        "time": "2020-05-26 15:10:2",
        "is_delete": 0
      },
    ];
    //this.manualList(null,null,null,null);


  }
  constructor(private modalService: NzModalService, private httpClient: HttpClient,
    private dataService: DataService
  ) { }

  //****DataService中消息队列有内容，即id有内容，优化按钮显示**************
  //public optimize_button=this.dataService.button
  public optimize_button = false;
  //**************************************************************** */
  public inputValue = null;
  public selectedValue = null;
  public sort_key = null;
  public sort_value = null;
  public err;
  manualList(find_key: string, find_vaule: string, sort_key: string, sort_value: string) {
    const url: string = '/api/get/manual/information';
    let params = new HttpParams();
    params = params.append('find_key', find_key).append('find_vaule', find_vaule).append('sort_key', sort_key).append('sort_value', sort_value);
    return this.httpClient.get(url, { params })
      .toPromise()
      .then(data => {
        this.listOfData = data['data']['manualList'];

      })
      .catch(this.err);
  }

  search() {
    this.manualList(this.selectedValue, this.inputValue, null, null);
  }
  sort(info) {
    this.sort_key = info.key;
    this.sort_value = info.value;
    this.manualList(this.selectedValue, this.inputValue, this.sort_key, this.sort_value);
  }

  optimize() {
    const modal = this.modalService.create({
      nzTitle: '知识库优化',
      nzContent: AddFaultComponent,
      nzWidth: 1400,
      nzFooter: null,
    });
  }

}
