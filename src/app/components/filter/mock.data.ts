import { Filter } from './filter.types';

export const defaultFilter: Filter<string> = {
  title: 'Filter title',
  name: 'filter-name',
  options: [
    { text: 'Option 1', value: 'o1' },
    { text: 'Option 2', value: 'o2' },
  ],
};
