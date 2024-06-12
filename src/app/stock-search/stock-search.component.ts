import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stock-search',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  CommonModule,
NgFor],
  templateUrl: './stock-search.component.html',
  styleUrl: './stock-search.component.css'
})
export class StockSearchComponent {
  stockDetailsData: any;
  myControl = new FormControl('');
  options: string[] = ["onefasdf", "sfasdfsdf", "fsfd"];
  filteredOptions: Observable<any[]> | undefined;
  showLoader: boolean = false;
  stockData: any;

  stockDetails(symbol: any) {
    this.stockData = symbol;
    this.dataService.getStockDetails(symbol?.symbol).subscribe(data => {
      this.stockDetailsData = data;
      this.showLoader = false;
      console.log(this.stockDetailsData)
    })
  }

  ngOnInit() {
    this.myControl.valueChanges.pipe(debounceTime(500)).subscribe((data: string | null) => {
      if (data != undefined && data?.length > 0) {
        this.filteredOptions = this.dataService.searchStock(data)
      }
      else {
        this.filteredOptions = new Observable<any[]>;
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(private dataService: DataService) { }
}
