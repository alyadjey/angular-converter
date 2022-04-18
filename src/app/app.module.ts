import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterHeaderComponent } from './components/converter-header/converter-header.component';

import { ConverterComponent } from './components/converter/converter.component';

import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [AppComponent, ConverterComponent, ConverterHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
