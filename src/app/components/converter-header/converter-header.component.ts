import { Component, Input } from '@angular/core';

@Component({
  selector: 'converter-header',
  templateUrl: './converter-header.component.html',
  styleUrls: ['./converter-header.component.scss'],
})
export class ConverterHeaderComponent {
  @Input() title: string = '';
}
