export interface Place {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface PlaceState {
  searchResults: Place[];
}
