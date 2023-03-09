import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'App';
import store from 'middlewares/configureStore';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode!).render(
  // 개발모드에서는 React.StrictMode로 인해 오류를 잘 잡기위해 useEffect(() => {}, [])가 두번 호출된다.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);
