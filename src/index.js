import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css';
import App from './app/layout/App.js';

const rootEl = document.getElementById('root')

function render(){
  ReactDOM.render(<App />, rootEl)
}
if (module.hot){
  module.hot.accept('./app/layout/App.js' , function(){
    setTimeout(render)
  })
}
render()


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

