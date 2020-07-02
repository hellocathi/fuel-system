
import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../service/data.service'
@Component({
    selector: 'fault-notify-table',
    template: `
    <nz-table #filterTable [nzData]="listOfData" [nzBordered]="true" 
    [nzShowSizeChanger]="true" [nzShowTotal]="total" [nzSize]="small"
    [nzShowQuickJumper]="true">
    <ng-template #total let-total> 共 {{ total }}条数据</ng-template>
    <thead (nzSortChange)="sort($event)" nzSingleSort>
        <tr>
            <th nzShowSort nzSortKey="fault_code" nzAlign="center"><span>故障代码</span></th>
            <th nzShowSort nzSortKey="fault_name" nzAlign="center"><span>故障名称</span></th>
            <th nzShowSort nzSortKey="fault_device_code" nzAlign="center"><span>故障设备代码</span></th>
            <th nzShowSort nzSortKey="fault_device_name" nzAlign="center"><span>故障设备名称</span></th>
            <th nzShowSort nzSortKey="fault_boat_code" nzAlign="center"><span>所属船只代码</span></th>
            <th nzShowSort nzSortKey="fault_boat_name" nzAlign="center"><span>所属船只名称</span></th>
            <th nzShowSort nzSortKey="fault_time" nzAlign="center"><span>发生故障时间</span></th>
            <th nzShowSort nzSortKey="fault_deal_method" nzAlign="center"><span>解决故障方法</span></th>
            <th nzAlign="center"><span>操作</span></th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let data of filterTable.data">
            <td nzAlign="center">{{ data.fault_code }}</td>
            <td nzAlign="center">{{ data.fault_name }}</td>
            <td nzAlign="center">{{ data.fault_device_code }}</td>
            <td nzAlign="center">{{ data.fault_device_name }}</td>
            <td nzAlign="center">{{ data.fault_boat_code }}</td>
            <td nzAlign="center">{{ data.fault_boat_name }}</td>
            <td nzAlign="center">{{ data.fault_time }}</td>
            <td nzAlign="center">{{ data.fault_deal_method }}</td>
            <td nzAlign="center"><button nz-button nzType="primary" nzSize="small" (click)="deal(data.id)">已处理</button></td>
        </tr>
    </tbody>
</nz-table>
  `,
    styles: [`
    span {
        font-weight: bold;
    }
    tr {
        line-height: 5px;
    }
    `]
})
export class FaultNotifyTableComponent implements OnInit {
    public listOfData: Array<any>;
    public err;
    public sort_key;
    public sort_value;
    constructor(private httpClient: HttpClient, private dataService: DataService) { }

    ngOnInit() {

        this.listOfData = [
            {
                "fault_code": "故障代码",
                "fault_name": "故障名称",
                "fault_boat_code": "rycz_20200526",
                "fault_boat_name": "燃油船只20200526",
                "fault_device_code": "rycz_20200526_sb_05",
                "fault_device_name": "燃油船只20200526设备05",
                "fault_time": "2020-05-26 15:10:20",
                "fault_deal_method": "故障解决方法",
                "is_deal": 0,
            },
            {
                "fault_code": "故障代码",
                "fault_name": "故障名称",
                "fault_boat_code": "rycz_20200530",
                "fault_boat_name": "燃油船只20200530",
                "fault_device_code": "rycz_20200530_sb_05",
                "fault_device_name": "燃油船只20200530设备05",
                "fault_time": "2020-05-30 15:10:20",
                "fault_deal_method": "故障解决方法",
                "is_deal": 0,
            },
        ];
        //this.faultList(this.dataService.fault_id,null,null);
    }

    faultList(id: number[], sort_key: string, sort_value: string) {
        const url: string = '/api/get/fault/notdeal/information';
        return this.httpClient.post(url,
            { id: id, sort_key: sort_key, sort_value: sort_value })
            .toPromise()
            .then(data => {
                this.listOfData = data['data']['faultList'];

            })
            .catch(this.err);
    }
    sort(info) {
        this.sort_key = info.key;
        this.sort_value = info.value;
        this.faultList(this.dataService.fault_id, this.sort_key, this.sort_value);
    }
    deal(id) {
        this.dealapi(id);
        this.faultList(this.dataService.fault_id, this.sort_key, this.sort_value);
    }
    dealapi(id: number) {
        const url: string = '/api/fault/deal/button/function';
        return this.httpClient.post(url, { id: id })
            .toPromise()
            .then(data => {

            })
            .catch(this.err);
    }
}
