import { Component, Input } from '@angular/core';
import { Filter } from '../filter/filter.types';

@Component({
  selector: 'app-instant-filters',
  templateUrl: './instant-filters.component.html',
  styleUrls: ['./instant-filters.component.scss'],
})
export class InstantFiltersComponent {
  @Input() filters: Array<Filter<string>> = [];
}
