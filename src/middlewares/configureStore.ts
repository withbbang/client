import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import logger from 'redux-logger';
import sagaConfigure from './configureSaga';
import Redux from 'redux';
import { rootReducer } from './configureReducer';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Array<
  SagaMiddleware | Redux.Middleware<{}, any, Redux.Dispatch<Redux.AnyAction>>
> = [sagaMiddleware];

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
