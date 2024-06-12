import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuySellComponent } from "./buy-sell/buy-sell.component";
import { StockSearchComponent } from "./stock-search/stock-search.component";
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardFooter } from '@angular/material/card';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BuySellComponent, StockSearchComponent, MatCard, MatCardHeader, MatCardFooter]
})
export class AppComponent {
  title = 'Market';
}
