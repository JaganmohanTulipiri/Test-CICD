import {
	configureStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "Redux-Saga";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "../Pages/dashboardSlice";
import logger from "redux-logger";

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
});

const persistConfig = {
	key: "root",
	storage,
};
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

export const persistor = persistStore(store);
