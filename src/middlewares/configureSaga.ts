import { SagaMiddleware } from 'redux-saga';
import { userSaga } from 'middlewares/sagas/userSaga';

function sagaConfigure(sagaMiddleware: SagaMiddleware) {
  sagaMiddleware.run(userSaga);
  // ... add others
}

export default sagaConfigure;
