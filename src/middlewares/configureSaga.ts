import { SagaMiddleware } from 'redux-saga';
import { commonSaga } from './sagas/commonSaga';
import { signSaga } from './sagas/signSaga';
import { logSaga } from './sagas/logSaga';
import { contentsSaga } from './sagas/contentsSaga';
import { categoryManageSaga } from './sagas/categoryManageSaga';
import { contentManageSaga } from './sagas/contentManageSaga';
import { authoritySaga } from './sagas/authoritySaga';
import { searchContentsSaga } from './sagas/searchContentsSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware): void {
  sagaMiddleware.run(signSaga);
  sagaMiddleware.run(logSaga);
  sagaMiddleware.run(commonSaga);
  sagaMiddleware.run(contentsSaga);
  sagaMiddleware.run(categoryManageSaga);
  sagaMiddleware.run(contentManageSaga);
  sagaMiddleware.run(authoritySaga);
  sagaMiddleware.run(searchContentsSaga);
  // add others...
}

export default sagaConfigure;
