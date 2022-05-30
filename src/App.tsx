// 使用{useState}，用来定义组件内部需要使用到的state
import React,{useState, useEffect} from 'react';
import logo from "./logo.svg";
import ColumnList from './components/ColumnList'
import dataList from './mock/ColumnList.json'
import styles from './App.module.css';
// 使其导入axios依赖
import axios from "axios";

const App:React.FC = function() {
  const [count, setCount] = useState<number>(0); // 这里是一个hook
  const [userData, setUserData] = useState<any>([]); // 这里是一个hook
  // 当我们点击下文click按钮后，会调用setCount方法，修改p标签，页面一旦变更，就会重新渲染。
  // 修改渲染完p后，会调用useEffect方法。把请求到的数据，调用setUserData赋值给userData.
  // useEffect第二个空数组参数，表示根据数组中中状态列表，这些状态的变化决定是否要调用useEffect函数。
  // 不加这个参数，是页面变更就会调用。而传递空数组的话，相当于componentDidMount的生命周期钩子函数，
  // 只会在DOM生成之后调用一次
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        setUserData(response.data);
    });
  }, []);
  return (
    <div>
      <p>{userData.map((user: any) => <span>{user.name}</span>)}</p>
      <p>you clicked {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
      <ul className = "styles.list">
        {dataList.map((l) => (
          // 调用子组件
          <ColumnList title={l.title} url={l.url} description = {l.description}/>
        ))}
      </ul>
    </div>
  )
}

export default App;
