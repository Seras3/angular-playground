import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../filter/filter.types';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent {
  @Input() filters: Array<Filter<string>> = [];

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  onSearch = () => {
    console.log(this.enteredSearchValue);
  };
}
