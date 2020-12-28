import React, {Component} from 'react'
import ToDo from './ToDo'

class List extends Component{
    render(){
        let list = this.props.list.map((e, i) => <ToDo key={i} task={e}/>)
        return (
            <div>{list}</div>
        )
    }
}

export default List