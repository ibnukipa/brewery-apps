import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object
  ? {[K in keyof T]-?: Join<K, Leaves<T[K]>>}[keyof T]
  : '';

export type GeneralStyle = ViewStyle | TextStyle | ImageStyle;

export type Pagination<Model> = {
  data: Model[];
  page_limit: number;
  page_offset: number;
  isLoading: boolean;
};
