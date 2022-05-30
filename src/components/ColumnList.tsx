import React, { useState, useContext } from "react";
// 导入appContext
import { appContext } from "../index";

interface ColumnProps {
  title: string;
  url: string;
  description: string;
}

const ColumnList: React.FC<ColumnProps> = function (props) {
  const [count, setCount] = useState<number>(0);
  // 更简单的获取父亲组件传过来的值的方式。直接通过useContext取出来
  const value = useContext(appContext);
  const handlerClick = (e: any) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    // 使用appContext.Consumer来读取appContext.Provider的数据
    <li onClick={handlerClick}>
      <img alt="logo" src={props.url} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/* 读取value中的userName属性值 */}
      <p>{value.userName}</p>
    </li>
  );
};

export default ColumnList;
