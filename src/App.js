//import logo from './attain2.svg';
import './App.css';
import React from 'react';
import tasks from './test/tasks.json';
import Tasks from './componentes/tasks';
import TaskForm from './componentes/taskForm';



/* 
    podemos escribir componentes de varias formas 

     funcion js normal
    function component(){
       return (
            <div> hola </div>
       );
    }

    function flecha 
    const component = () => <div> hola </div>
    
    clase
    class Component extends React.component{
        render(){
           <div> hola </div>
        }
    }
*/

/* props: los props en react son propiedeades que se le añaden a un component para que pinte cosas distintas un mismo 
 componente y se le pasa como parametro a la function del componente (se añaden como atributos html al componente) */
/*function Saludo(props){
   return(
       <h2>{props.title}</h2>
   );
} */
console.log(tasks);
class App extends React.Component{
   
   state = {
       tasks: tasks
   }
    render(){
        return (
          <div>
            <TaskForm />
            {/* Se le asigna el estado a el componente que itera el arreglo */}
             <Tasks tasks={this.state.tasks} />
             
          </div>

    )
    }

    
   
}
 

/*function OtherComponent(){
   return (
      <div>
         <h2>¡Formulario de contacto!</h2>
      </div>
   );
} */

export default App;

