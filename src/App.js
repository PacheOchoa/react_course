import logo from './attain2.svg';
import './App.css';
import React from 'react';


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

class Helloworld extends React.Component{
    state = {
      show:true
    }

    ToggleShow(){
      this.setState({show: !this.state.show})
    }

    render(){
       if(this.state.show){
         return <div id="hello">
         <h3>{this.props.subtitle}</h3>
          {this.props.text}
          <button onClick={this.ToggleShow.bind(this)}>Toggle show</button>
       </div>
       
       }else{
         return <div>
         <h1>No hay elementos</h1>
         <button onClick={this.ToggleShow.bind(this)}>Toggle show</button>
        </div>
          
       }
      
    }
}




function App() {
  return (
    
    <div class="load">
      
    


       <div>
          <Helloworld text="Hola" subtitle="serch"/>
          <Helloworld text="Mundo" subtitle="serch"/>
          <Helloworld text="React" subtitle="serch"/>
       </div>
       
   
</div>
  );
}
 

/*function OtherComponent(){
   return (
      <div>
         <h2>¡Formulario de contacto!</h2>
      </div>
   );
} */

export default App;

