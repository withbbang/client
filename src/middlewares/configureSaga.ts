import { SagaMiddleware } from 'redux-saga';
import { userSaga } from 'middlewares/sagas/userSaga';
import { commonSaga } from './sagas/commonSaga';
import { signSaga } from './sagas/signSaga';
import { logSaga } from './sagas/logSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(userSaga);
  sagaMiddleware.run(signSaga);
  sagaMiddleware.run(logSaga);
  sagaMiddleware.run(commonSaga);
  // add others...
}

export default sagaConfigure;
