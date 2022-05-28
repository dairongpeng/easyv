import React from 'react'

// interface ColumnProps {
//     title: string;
//     url: string;
//     description: string;
// }

// const ColumnList:React.FC<ColumnProps> = (props) => {
//     const url = props.url;
//     const title = props.title;
//     const description = props.description;
//     return (
//         <li>
//             <img src={url}/>
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </li>
//     )
// }

interface ColumnProps {
    title: string;
    url: string;
    description: string;
}

interface State {
    count: number;
}

class ColumnList extends React.Component<ColumnProps, State> {
    constructor(props: ColumnProps) {
        super(props);
        this.state = {
            count: 1
        };
        // ts报错：无法分配"count",因为它是只读属性
        // this.state.count = 2;

        // 强行绑定，否在在编译阶段找不到handlerClick
        this.handlerClick = this.handlerClick.bind(this);
    }

    uniques() {
        this.setState({count: 3});
    }

    handlerClick(event: any) {
        this.setState({count: 2});
        console.log(this.state.count);
    }

    render() {
        return ( // jsx
        <li onClick={this.handlerClick}>
            <img alt="logo" src={this.props.url}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </li> 
        );
    }
}

export default ColumnList;

