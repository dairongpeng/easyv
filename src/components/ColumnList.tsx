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

class ColumnList extends React.Component<ColumnProps> {
    constructor(props: ColumnProps) {
        super(props);
    }

    render() {
        return (
        <li>
            <img alt="logo" src={this.props.url}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </li> 
        );
    }
}

export default ColumnList;

