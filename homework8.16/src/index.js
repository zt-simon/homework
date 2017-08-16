import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Control from './Control'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Control/>, document.getElementById('root'));
registerServiceWorker();
