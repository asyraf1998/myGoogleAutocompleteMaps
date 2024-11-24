import { FETCH_PLACES_SUCCESS } from "../actions/placeActions";
import { Place } from "../../types/placeTypes";

interface PlaceState {
  searchResults: Place[];
}

const initialState: PlaceState = {
  searchResults: [],
};

export const placeReducer = (state = initialState, action: any): PlaceState => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
