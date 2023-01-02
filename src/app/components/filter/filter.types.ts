export interface FilterOption<T extends string | number | symbol> {
  text: string;
  value: T;
  checked?: boolean;
}

export interface Filter<T extends string | number | symbol> {
  title: string;
  name: string;
  options: Array<FilterOption<T>>;
}
