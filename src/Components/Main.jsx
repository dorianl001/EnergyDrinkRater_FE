import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Ratebev from './Ratebev';


function Main(props) {
    return (
        <div>
           <Route exact path='/' component={Home}/>
           <Route exact path='/ratebev' component={Ratebev}/>
        </div>
    );
}

export default Main;
