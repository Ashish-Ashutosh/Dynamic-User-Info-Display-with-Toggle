import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<h1> Hi, I am not using REACT</h1>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
