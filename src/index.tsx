import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建一个value类型的值
const defaultValue = {
  userName: "dairongpeng"
}

// 把defaultValue传递给react的context。数据的提供者。
// 消费者是使用这个数据的子组件。export不要遗漏
export const appContext = React.createContext(defaultValue);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 使用appContext.Provider包裹<App/>。借助value参数把defaultValue传递到子组件App中去 */}
    <appContext.Provider value={defaultValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
