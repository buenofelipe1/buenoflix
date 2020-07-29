import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Pages/Home/App';

import { BrowserRouter, Switch, Route   } from 'react-router-dom'; 
//import Pagina404 from './components/Pages/404';


import Pagina404 from './components/Pages/404';
import CadastroVideos from './components/Pages/cadastro/video';
import CadastroCategoria from './components/Pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    
    <Switch>
    <Route path= "/" component={App} exact/>
    <Route path="/cadastro/video" component= {CadastroVideos} />
    <Route path="/cadastro/categoria" component= {CadastroCategoria} />
    <Route component={Pagina404}/> 
    
    
    </Switch>
    
    </BrowserRouter>,
  document.getElementById('root')
);
