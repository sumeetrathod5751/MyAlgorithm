import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuySellComponent } from "./buy-sell/buy-sell.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BuySellComponent]
})
export class AppComponent {
  title = 'Market';
}
