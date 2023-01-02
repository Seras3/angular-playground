import { Component, Input } from '@angular/core';
import { Filter } from './filter.types';
import { defaultFilter } from './mock.data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input('data') filter: Filter<string> = defaultFilter;
}
