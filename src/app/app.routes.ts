import { Routes } from '@angular/router';
import { BuySellComponent } from './buy-sell/buy-sell.component';

export const routes: Routes = [

    {
        path:"search",
        component: BuySellComponent
    }
    ,    {
        path:"list",
        component: BuySellComponent
    }
];
