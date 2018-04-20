import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './js/App';
import {BrowserRouter} from 'react-router-dom';

//import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(
    /*<Provider store={store}>*/
    <BrowserRouter>
        <App />
    </BrowserRouter>

/*</Provider>*/,
    document.getElementById('root'));
//registerServiceWorker();
