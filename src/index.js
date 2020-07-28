import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route   } from 'react-router-dom'; 

import Pagina404 from './components/Pages';


ReactDOM.render(
  <BrowserRouter>
    
    <Switch>

    <Route path= "/" component={App} exact/>
    <Route component={Pagina404}/>

    </Switch>
    
    </BrowserRouter>,
  document.getElementById('root')
);
