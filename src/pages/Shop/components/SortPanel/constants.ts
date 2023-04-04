import { SelectOption } from '../../../../types/types';

export const sortParams: SelectOption[] = [
  { value: 'default', label: 'Featured' },
  { value: 'price-ASC', label: 'Price: Low to High' },
  { value: 'price-DESC', label: 'Price: High to Low' },
  { value: 'name-ASC', label: 'A - Z' },
  { value: 'name-DESC', label: 'Z - A' },
];
