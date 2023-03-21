import { SagaMiddleware } from 'redux-saga';
import { adminSaga } from 'middlewares/sagas/adminSaga';
import { commonSaga } from './sagas/commonSaga';
import { signSaga } from './sagas/signSaga';
import { logSaga } from './sagas/logSaga';
import { postSaga } from './sagas/postSaga';
import { categoryManageSaga } from './sagas/categoryManageSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(adminSaga);
  sagaMiddleware.run(signSaga);
  sagaMiddleware.run(logSaga);
  sagaMiddleware.run(commonSaga);
  sagaMiddleware.run(postSaga);
  sagaMiddleware.run(categoryManageSaga);
  // add others...
}

export default sagaConfigure;
