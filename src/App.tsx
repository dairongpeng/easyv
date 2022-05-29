// 使用{useState}，用来定义组件内部需要使用到的state
import React,{useState, useEffect} from 'react';
import logo from "./logo.svg";
import ColumnList from './components/ColumnList'
import dataList from './mock/ColumnList.json'
import styles from './App.module.css';
// 使其导入axios依赖
import axios from "axios";

function App() {
  const [count, setCount] = useState(0); // 这里是一个hook
  // 当我们点击下文click按钮后，会调用setCount方法，修改p标签，重新渲染。
  // 修改渲染完p后，会调用useEffect方法。找到当前网页title标题，动态渲染标题
  // 由于useEffect是在组件内部声明的，所以该方法可以访问到App里面的props和state
  useEffect(() => {
    // 通过ES6的${}来植入变量
    document.title = `you clicked ${count} times`
  });
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default App;
