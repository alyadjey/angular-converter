import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyModel } from 'src/app/models/currency.model';

@Component({
  selector: 'ng-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  titleUSD: string = '';
  titleEUR: string = '';
  intA: number = 1;
  intB: number = 1;
  c: any = {};
  select: any = 'UAH';
  select2: any = 'UAH';
  currency?: CurrencyModel;
  currencies: string[] = ['UAH', 'USD', 'EUR'];
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.currencyService.getCurrency<CurrencyModel>().subscribe(
      (result) => this.onLoadSuccessful(result),
      (error) => this.onLoadFail(error)
    );
  }

  onLoadSuccessful(result: CurrencyModel) {
    this.currency = result;
    this.c = {
      USD: result.Valute.USD.Value as number,
      EUR: result.Valute.EUR.Value as number,
      UAH: 3,
    };
    this.titleUSD = Math.ceil(this.c.USD / 3) as any;
    this.titleEUR = Math.ceil(this.c.EUR / 3) as any;
    console.log(this.c);
  }
  onLoadFail(error: any) {
    console.log(error);
  }

  count() {
    let z = 0;
    if (this.select === this.select2) {
      this.intB = this.intA;
    } else {
      if (this.select != 'RUB') {
        z = this.intA * this.c[this.select];
        this.intB = Math.ceil((z / this.c[this.select2]) * 100) / 100;
      } else {
        this.intB = Math.ceil(this.intA * this.c[this.select2] * 100) / 100;
      }
    }
  }
}
