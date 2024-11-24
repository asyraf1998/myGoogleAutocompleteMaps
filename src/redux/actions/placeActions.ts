import { Place } from "../../types/placeTypes";

export const FETCH_PLACES = "FETCH_PLACES";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";

export const fetchPlaces = (query: string) => ({
  type: FETCH_PLACES,
  payload: query,
});

export const fetchPlacesSuccess = (places: Place[]) => ({
  type: FETCH_PLACES_SUCCESS,
  payload: places,
});
