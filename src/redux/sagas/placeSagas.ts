import { put, takeLatest } from "redux-saga/effects";
import { FETCH_PLACES, fetchPlacesSuccess } from "../actions/placeActions";
import { mockPlaces } from "../../mockData/mockPlaces";

function* handleFetchPlaces(action: any) {
  const query = action.payload.toLowerCase();

  const filteredPlaces = mockPlaces.filter((place) =>
    place.name.toLowerCase().includes(query)
  );

  yield put(fetchPlacesSuccess(filteredPlaces));
}

export function* placeSaga() {
  yield takeLatest(FETCH_PLACES, handleFetchPlaces);
}
