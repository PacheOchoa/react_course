
import React,{Component} from 'react';


class Task extends Component{
    StyleComplete(){
        return{
           fontSize:'20px',
           color: this.props.tasks.status ? 'gray': 'black',
           textDecoration:this.props.tasks.status ? 'line-through' : 'none'

        }
    }
    render(){
        return <div>
            <h1 style={this.StyleComplete()}>
            {this.props.tasks.id} ---- 
            {this.props.tasks.titulo}  ---- 
            {this.props.tasks.descripcion} --- 
             {this.props.tasks.status}
            <input type="checkbox"></input>
            <button style={btnDel}>X</button>
            </h1>
        </div>
    }
}

const btnDel = {
    background: 'orchid',
    fontSize: '18px',
    borderRadius:'50%',
    color:'white',
    cursor:'pointer'

}


export default Task;