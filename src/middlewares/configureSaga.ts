import { SagaMiddleware } from 'redux-saga';
import { commonSaga } from './sagas/commonSaga';
import { signSaga } from './sagas/signSaga';
import { logSaga } from './sagas/logSaga';
import { postSaga } from './sagas/postSaga';
import { contentsSaga } from './sagas/contentsSaga';
import { categoryManageSaga } from './sagas/categoryManageSaga';
import { authoritySaga } from './sagas/authoritySaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(signSaga);
  sagaMiddleware.run(logSaga);
  sagaMiddleware.run(commonSaga);
  sagaMiddleware.run(postSaga);
  sagaMiddleware.run(contentsSaga);
  sagaMiddleware.run(categoryManageSaga);
  sagaMiddleware.run(authoritySaga);
  // add others...
}

export default sagaConfigure;
