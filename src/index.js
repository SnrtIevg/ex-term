import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const hello = (name) => {
  return (
    <div>hello {name}</div>
  )
}
ReactDOM.render(hello("nihao"), document.getElementById('root'));
serviceWorker.unregister();
