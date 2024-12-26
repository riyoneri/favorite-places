import { Place } from "./models/place";

export interface Location {
  latitude: number;
  longitude: number;
}

export interface DatabasePlace extends Omit<Place, "location"> {
  lat: number;
  lng: number;
}
