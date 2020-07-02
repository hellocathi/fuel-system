import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'cascader',
    template: `
    <nz-cascader 
      [nzShowSearch]="true"
      [nzPlaceHolder]="'请选择或者输入设备'"
      [nzChangeOn]="validate"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    >
    </nz-cascader>
  `,
    styles: [
        `
        nz-cascader{
            margin-top: 20px;
            margin-bottom: 20px;
            
        }
      .ant-cascader-picker {
        width: 300px;
      }
    `
    ]
})
export class CascaderComponent implements OnInit {

    @Output() outer = new EventEmitter();
    public err;
    public nzOptions: NzCascaderOption[];
    public values: string[] | null;
    constructor(private httpClient: HttpClient, ) { }


    boatList() {
        const url: string = '/api/get/boat/list';
        return this.httpClient.get(url)
            .toPromise()
            .then(data => {
                this.nzOptions = data['data']['boatList'];

            })
            .catch(this.err);
    }
    ngOnInit() {
        this.nzOptions = [
            {
                "value": "1",
                "label": "远航号",
                "children": [
                    {
                        "value": "1",
                        "label": "远航01燃油设备",
                        "isLeaf": true
                    },
                    {
                        "value": "2",
                        "label": "远航02燃油设备",
                        "isLeaf": true
                    },
                ]
            },
            {
                "value": "2",
                "label": "神舟号",
                "children": [
                    {
                        "value": "3",
                        "label": "神舟01燃油设备",
                        "isLeaf": true
                    },
                    {
                        "value": "4",
                        "label": "神舟02燃油设备",
                        "isLeaf": true
                    },
                ],
            }
        ];

        //this.boatList();
        this.values = null;
    }
    onChanges(values: string[]): void {
        this.outer.emit(values[2]);
        //console.log(values[2]);
    }

}