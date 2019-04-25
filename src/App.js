import React from 'react';
import './styles.css';
import { Route, Switch, Link} from "react-router-dom";
import Routetransit from './Routetransit';

function App() {
  return (
    <div className='container'>
      <div className='links'>
        <Link to='/'>
          Route 1
        </Link>
        <Link to='/2'>
          Route 2
        </Link>
      </div>
    
      <div className='routes'>
        <Switch>
          <Route exact path='/' component={Routetransit(Route1, 'fadeInDown')} />
          <Route path='/2' component={Routetransit(Route2, 'fadeInDown')} />
        </Switch>
      </div>

    </div>
  );
}

function Route1(){
  return (  
    <div className='route one'>
      <h2>this is route 1</h2>
    </div>
  );
}

function Route2(){
  return (  
    <div className='route two'>
      <h2>this is route 2</h2>
    </div>
  );
}
 

export default App;
