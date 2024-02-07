export type Nullable<T> = null | T;

export interface Tube {
  id: number;
  age: number;
  companyName: string;
  city: string;
  cityDistrict: string;
  visionDefect: Nullable<number>;
}

export interface Rack {
  index: number;
  tubes: Tube[];
}
