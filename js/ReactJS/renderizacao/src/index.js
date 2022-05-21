import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import Botao from './Botao';
import ComponentePai from './ComponentePai';
import { getSourceMapRange } from 'typescript';

const root = document.getElementById('root');

const elemento = "Olá mundo";

function soma (a, b){
  return alert(a + b);
}

function App(){
  return(
    <div className='App'>
      {elemento}
      <ComponentePai>
        <Botao onClick={() => soma(10, 20)} name="botao" />
      </ComponentePai>
    </div>
  )
}

reactDom.render(App(), root)
