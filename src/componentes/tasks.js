import React,{Component} from 'react';
import Task from './task';


class Tasks extends Component{
    render(){
        return this.props.tasks.map(e => <Task tasks={e} />
         
         )
    }
}


export default Tasks;
