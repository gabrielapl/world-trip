export interface Continent {
  id: string;
  name: string;
  banner: string;
  description: string;
  citys: City[];
}

export interface City {
  name: string;
  country: string;
  banner: string;
  badge: string;
  continentID: string;
}