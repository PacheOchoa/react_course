import { render } from '@testing-library/react';
import React,{Component} from 'react';




class taskForm extends Component{
    sendTask(e){
        console.log("enviado");
        e.preventDefault();
        
    }


     render(){
          return (
            <form onSubmit={this.sendTask.bind()}>
            <label>Escribe una tarea</label> <br></br>
              <input type="text" placeholder="escribe una tarea" /> <br></br>
              
              <label>Escribe una descripción</label> 
              <br></br>
              <textarea placeholder="escribe una descripción"></textarea>
              <br></br>
              <input type='submit'></input>
            </form>
          )

          
     }
}


export default taskForm;

