import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../../data.service'
@Component({
    selector: 'add-fault',
    templateUrl: './add-fault.component.html',
    styles: []
})
export class AddFaultComponent implements OnInit {
    editCache: { [key: string]: { edit: boolean; data: [] } } = {};
    public listOfData: Array<any>;
    ngOnInit(): void {
        //查询api
        this.listOfData = [
            {
                "id": "1",
                "fault_code": "abn-p-01",
                "fault_name": "供油管路未通",
                "algorithm": "故障算法模型",
                "reason": "供油管路未通",
                "feature": "P1不在正常工作范围内",
                "method": "检查油仓到燃油供应单元间阀门状态",
                "count_month": "3"
            },
            {
                "id": "2",
                "fault_code": "abn-p-03",
                "fault_name": "滤芯堵塞",
                "algorithm": "故障算法模型",
                "reason": "滤芯堵塞",
                "feature": "P3-P1超出设定值",
                "method": "切换备用粗滤器，清洗滤芯",
                "count_month": "4"
            },
        ];
        //this.faultoOtimizationInformation(this.dataService.id);
        this.updateEditCache();
    }


    startEdit(id: string): void {
        this.editCache[id].edit = true;
    }

    cancelEdit(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: { ...this.listOfData[index] },
            edit: false
        };

    }

    saveEdit(id: string): void {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
    }

    updateEditCache(): void {
        this.listOfData.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: { ...item }
            };
        });
    }
    accept(data) {
        this.acceptapi(data);
        this.faultoOtimizationInformation(this.dataService.id);
    }

    acceptapi(data) {
        const url: string = '/api/agree/fault/optimization';
        return this.httpClient.post(url,
            { fault_id: data.id, fault_code: data.fault_code, fault_name: data.fault_name, reason: data.reason, feature: data.feature, method: data.method })
            .toPromise()
            .then(data => {
            })
            .catch(this.err);
    }
    refuse(id: number) {
        this.refuseapi(id);
        this.faultoOtimizationInformation(this.dataService.id);
    }
    refuseapi(id: number) {
        const url: string = '/api/not/agree/fault/optimization';
        return this.httpClient.post(url, { fault_id: id })
            .toPromise()
            .then(data => {
            })
            .catch(this.err);
    }
    constructor(private httpClient: HttpClient, private dataService: DataService) {

    }

    public inputValue = null;
    public selectedValue = null;
    public sort_key = null;
    public sort_value = null;
    public err;
    faultoOtimizationInformation(fault_id: number[]) {
        const url: string = '/api/get/fault/optimization/information';
        return this.httpClient.post(url, { fault_id: fault_id })
            .toPromise()
            .then(data => {
                this.listOfData = data['data']['faultoOtimizationInformation'];

            })
            .catch(this.err);
    }

}