import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buy-sell',
  standalone: true,
  imports: [NgFor],
  templateUrl: './buy-sell.component.html',
  styleUrl: './buy-sell.component.css'
})
export class BuySellComponent implements OnInit {
  tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Sam Johnson', age: 22 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
