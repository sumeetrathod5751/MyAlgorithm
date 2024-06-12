import { Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';;
import { FormsModule, NgModel } from '@angular/forms';
import { MatPaginatorIntl, MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardHeader } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatCardFooter } from '@angular/material/card';


@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [NgFor,
    CommonModule,
    FormsModule,
    BuySellComponent,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardContent,
    MatCard,
    MatCardFooter,
    MatCardHeader],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.css'
})

export class BuySellComponent implements OnInit, MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;
  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';
  @Input() canBuy: boolean = false;
  @Input() canSell: boolean = false;
  inputValue: string = '';
  isBuyEnabled: boolean = false;
  isSellEnabled: boolean = false;
  tableData: any = [2, 3];
  showLoader: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchTrades();
    console.log(this.tableData);
  }

  fetchTrades(): void {
    //logic to get the buying and selling data
    this.showLoader = true;
    this.dataService.getData().subscribe(data => {
      this.tableData = data;
      this.showLoader = false;
    })
  }

  onInputChange(): void {
    this.canBuy = this.inputValue.toLowerCase() === 'buy';
    this.canSell = this.inputValue.toLowerCase() === 'sell';
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
} import { ɵAnimationGroupPlayer } from '@angular/animations';

