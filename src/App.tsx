import React from 'react';
import ColumnList from './components/ColumnList'
import dataList from './mock/ColumnList.json'
import styles from './App.module.css';
// 使其导入axios依赖
import axios from "axios";

interface Props{}

// 定义当前的State
interface State {
  dataSource: any[];
  // 用来标识State中的数据是否被加载完成了
  havedata: boolean;
}

// 改造App函数为App类
class App extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      dataSource:[],
      havedata: false,
    };
  }

  componentDidMount() {
    // 在componentDidMount生命周期中使用axios请求数据，放到State里面
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        // [{...},{...}....]
        // console.log(data.data);
        this.setState({
          dataSource: data.data,
          havedata: true,
        });
      });
  }

  render() {
    return (
      <div>
      <ul className = {styles.list}>
        {dataList.map((l) => 
        <ColumnList url={l.url} description={l.description} title={l.title}/>)}
      </ul>
      {/* 显示我们上文通过axios请求过来的数据 */}
      <ul>
          {/* 如果数据没被加载，显示为loding...，加载成功了解析出来email进行显示 */}
          {!this.state.havedata
          ? "loding..." 
          : this.state.dataSource.map((u) => <li>{u.email}</li>)
          }
      </ul>
      </div>
    );
  }
}

export default App;
