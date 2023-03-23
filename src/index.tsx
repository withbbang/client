import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'App';
import store from 'middlewares/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const rootNode: HTMLElement | null = document.getElementById('root');

ReactDOM.createRoot(rootNode!).render(
  // 개발모드에서는 React.StrictMode로 인해 오류를 잘 잡기위해 useEffect(() => {}, [])가 두번 호출된다.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    {/* loading: 로딩 과정을 보여줄 컴포넌트 */}
    {/* persistor: 로컬 스토리지에 저장할 store (결국 여기선 persistStore가 반환한 값) */}
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
);
