import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { placeReducer } from "../src/redux/reducers/placeReducer";
import { placeSaga } from "../src/redux/sagas/placeSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    places: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(placeSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
