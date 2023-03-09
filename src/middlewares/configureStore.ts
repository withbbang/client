import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import users from 'middlewares/reduxTookits/userSlice';
import sagaConfigure from './configureSaga';

const rootReducer = combineReducers({
  users
  // others...
});

const sagaMiddleware = createSagaMiddleware();

const middlewares: Array<any> = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production'
});

sagaConfigure(sagaMiddleware);

export default store;
