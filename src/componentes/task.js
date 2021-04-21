import React,{Component} from 'react';


class Task extends Component{
    render(){
        return <div>
            <h1>
            {this.props.tasks.id} ---- 
            {this.props.tasks.titulo}  ---- 
            {this.props.tasks.descripcion} --- 
             {this.props.tasks.status}
            <input type="checkbox"></input>
            <button>X</button>
            </h1>
        </div>
    }
}


export default Task;