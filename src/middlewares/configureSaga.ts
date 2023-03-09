import { SagaMiddleware } from 'redux-saga';
import { userSaga } from 'middlewares/sagas/userSaga';
import { commonSaga } from './sagas/commonSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(userSaga);
  sagaMiddleware.run(commonSaga);
  // add others...
}

export default sagaConfigure;
