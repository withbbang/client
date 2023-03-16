import { SagaMiddleware } from 'redux-saga';
import { adminSaga } from 'middlewares/sagas/adminSaga';
import { commonSaga } from './sagas/commonSaga';
import { signSaga } from './sagas/signSaga';
import { logSaga } from './sagas/logSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(adminSaga);
  sagaMiddleware.run(signSaga);
  sagaMiddleware.run(logSaga);
  sagaMiddleware.run(commonSaga);
  // add others...
}

export default sagaConfigure;
