
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
    selector: 'ship-fault',
    template: `
    <div style="color:white;font-size:20px;margin:0px 0 0 30px;">船只故障排名</div>
    <select (change)="onChange($event.target.value)">
        <option value="1">近七天</option>
        <option value="2">近一月</option>
        <option value="3">近一季</option>
        <option value="4">近一年</option>
        <option value="5">全部</option>
    </select>
    <div class="a" id="ship-fault"></div>
    <div style="float:right;margin:0px 20px 0 0"  >
    <button nz-button nzType="link" (click)="goDetails()" nzGhost><i nz-icon nzType="setting"></i>详情</button>
    </div>
  `,
    styles: [
        `
        option{
            background-color:white;
            color:black;
            }
        select{
            margin: 10px 0px 0px 31%;
            width: 160px;
            height:30px;
            color:white;
            background:none;
            background:url("assets/tmp/img/select.jpg");
            background-size: 100% 100%;
            border-style: none;
            text-indent: 82px;
            position:absolute;
            z-index:10;
        }
        .a{
            margin: 30px 0px 0px 0px;
          }
    `
    ]
})
export class ShipFaultComponent implements OnInit {

    public data: Array<any>;
    public err;
    constructor(public router: Router, private httpClient: HttpClient, ) { }
    BoatsFaultRank(date: string) {
        const url: string = '/api/get/boat/fault/rank';
        let params = new HttpParams();
        params = params.append('date', date)
        return this.httpClient.get(url, { params })
            .toPromise()
            .then(data => {
                this.data = data['data']['BoatsFaultRank'];

            })
            .catch(this.err);
    }
    ngOnInit() {
        let selectedValue = "sevenday";
        // 注意由于分类轴的顺序是从下往上的，所以数组的数值顺序要从小到大
        this.data = [
            { "fault_boat_name": "远航1号", "fault_boat_count": 50 },
            { "fault_boat_name": "神州1号", "fault_boat_count": 75 },
            { "fault_boat_name": "远航2号", "fault_boat_count": 86 },
            { "fault_boat_name": "神州2号", "fault_boat_count": 110 },
            { "fault_boat_name": "神州5号", "fault_boat_count": 130 },
        ];

        //this.BoatsFaultRank(null);
        let maxdata = Math.floor(this.data[4].fault_boat_count / 0.95);
        const ds = new DataSet();
        const dv = ds.createView().source(this.data);
        dv.transform({
            type: 'map',
            callback(row) { // 加工数据后返回新的一行，默认返回行数据本身
                row.newCol = maxdata - row.fault_boat_count;
                return row;
            }
        });
        dv.transform({
            type: 'fold',
            fields: ['fault_boat_count', 'newCol'], // 展开字段集
            key: 'people', // key字段
            value: 'value', // value字段
        });
        const chart = new G2.Chart({
            container: 'ship-fault',
            forceFit: true,
            height: 190,
            padding: [20, 25, 0, 85]
        });
        chart.source(dv);
        chart.axis('fault_boat_name', {
            line: null,
            tickLine: null,
            label: {
                offset: 12,
                textStyle: {
                    fill: 'white'
                }
            }
        });
        chart.axis('value', {
            label: null,
            line: null,
            grid: null,
            tickLine: null,
        });
        chart.legend(false);
        chart.tooltip(false);
        chart.coord().transpose();
        const interval = chart.intervalStack().position('fault_boat_name*value')
            .color('people', ['l(360) 0:rgb(247,255,206) 1:rgb(24, 244, 216)', 'rgb(24, 74, 123)'])
            .opacity(1)
            .size(10)
            .label('value', {
                formatter: (text, item, index) => {
                    if (item.point.people == "newCol") {
                        return maxdata - item.point.value;
                    }
                },
                textStyle: {
                    fill: 'white',
                    textAlign: 'end',
                },
                offsetX: -10,
                offsetY: -5,
            });

        chart.render();
        interval.setSelected(this.data[0]);
    }
    goDetails() {
        this.router.navigate(['statistics-message/fault-statistics/ship-fault']);

    }
    onChange(selectedValue: string) {
        this.BoatsFaultRank(selectedValue);
    }
}

