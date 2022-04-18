export class CurrencyModel {
  public timestamp: number;
  public date: string;
  public Valute: any;
  constructor(timestamp: number, date: string, Valute: any) {
    this.timestamp = timestamp;
    this.date = date;
    this.Valute = Valute;
  }
}
