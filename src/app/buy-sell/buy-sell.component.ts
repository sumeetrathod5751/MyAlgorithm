import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';;
import { FormsModule, NgModel } from '@angular/forms'; // Import FormsModule
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, BuySellComponent, MatPaginatorModule],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.css'
})

export class BuySellComponent implements OnInit {
  @Input() canBuy: boolean = false;
  @Input() canSell: boolean = false;
  inputValue: string = '';
  isBuyEnabled: boolean = false;
  isSellEnabled: boolean = false;
  tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Sam Johnson', age: 22 }
  ];


  constructor() { }

  ngOnInit(): void {
    this.fetchTrades();
  }

  fetchTrades(): void {//logic to get the buying and selling data
  }

  onInputChange(): void {
    this.canBuy = this.inputValue.toLowerCase() === 'buy';
    this.canSell = this.inputValue.toLowerCase() === 'sell';
  }
} import { ɵAnimationGroupPlayer } from '@angular/animations';

