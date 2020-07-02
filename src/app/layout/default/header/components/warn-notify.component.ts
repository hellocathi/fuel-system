import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { WarnNotifyTableComponent } from './warn-notify-table.component';
import { WarnNotifyTable2Component } from './warn-notify-table2.component';
import { Router } from '@angular/router'
import { DataService } from '../service/data.service'
/**
 * 菜单通知
 */
@Component({
  selector: 'warn-notify',
  template: `
  <div class="alain-default__nav-item">
    <button class="a" nz-button nzType="link" nzGhost (click)="showModal()">
      <i nz-icon nzType="warning" style="font-size: 24px; color:yellow;"></i>
      <nz-badge [(nzCount)]="warn_count" [nzOffset]="[-13,-28]" [nzStyle]="{ backgroundColor: '#ffee00', boxShadow: '0 0 0 1px #ffee00 inset' }"></nz-badge>
   </button>
  </div>
  `,
  styles: [
    `
    .a{
      margin-left:-15px;
      margin-right:-12px;
    }
     
    `
  ]

})
export class WarnNotifyComponent implements OnInit {
  public warn_count = this.dataService.warn_count;
  ngOnInit() {


  }

  constructor(private modalService: NzModalService, public router: Router,
    private dataService: DataService,
  ) { }



  // showModal() {
  //   const modal = this.modalService.create({
  //     //nzTitle: '当前预警',
  //     nzContent: WarnNotifyTable2Component,
  //     nzWidth: 1600,
  //     nzOkText: null,
  //     nzCancelText: null,
  //     nzFooter: null,
  //     //nzOnOk: () => this.router.navigate(['data-message/warn-message']),
  //   });
  // }

  showModal() {
    const modal = this.modalService.create({
      nzTitle: '当前预警',
      nzContent: WarnNotifyTableComponent,
      nzWidth: 1540,
      nzOkText: '详情',
      nzCancelText: null,
      nzOnOk: () => this.router.navigate(['data-message/warn-message']),
    });
  }
} 