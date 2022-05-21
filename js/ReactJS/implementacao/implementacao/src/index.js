import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 
JSX é um sintatic suggar que nos permite escrever textos html sem a forma de html ou string

*/
function JSX() {
  return (
    // para declarar clases em jsx, usamos className, pois class é uma palavra reservada do js
    <div className='texto'>
      JSX
      <br></br>
      soma = {10 + 20}
    </div>
  )
}

const App = () => {

  return (
    <div className='App'>
      Hello World!
      {JSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
