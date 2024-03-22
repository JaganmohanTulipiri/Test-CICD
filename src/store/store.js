import {
	configureStore,
	applyMiddleware,
	combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import profileReducer from "./slices/profileSlice";
import teacherReducer from "../features/teacher/teacherSlice";

import rootSaga from "../../src/store/sagas/index";
import studentReducer from "./slices/studentSlice/studentSlice";
import superAdminReducer from "./slices/superAdminSlice/superAdminSlice";
import schoolAdminReducer from '../features/authentication/components/schoolAdmin/schoolAdminSlice';
import districtReducer from "../DistrictAdminApis/districtAdminSlice";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	profile: profileReducer,
	teacher: teacherReducer,
	student: studentReducer,
	superAdmin: superAdminReducer,
	schoolAdmin: schoolAdminReducer,
  districtAdmin:districtReducer,


  

});

const persistConfig = {
  key: 'root',
  storage,
};
let middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
