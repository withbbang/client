import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode!).render(
  // 개발모드에서는 React.StrictMode로 인해 오류를 잘 잡기위해 useEffect(() => {}, [])가 두번 호출된다.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);
