export interface TimezoneInfo {
  country: string;
  city: string;
  timezone?: string;
}

export type GeoapifyReverseResponse = {
  country: string;
  housenumber: string;
  street: string;
  county: string;
  postcode: string;
  city: string;
  lon: number;
  lat: number;
  formatted: string;
  timezone: GeoapifyTimezone;
}[];

export interface GeoapifyTimezone {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD: string;
  abbreviation_DST: string;
}
