import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Routetransit = (Page, transitionClass) =>{

    
  return props=>
    
      <CSSTransitionGroup 
        transitionAppear={true}
        transitionName={transitionClass}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
      
        <Page {...props}/>
      </CSSTransitionGroup >
    
  
}

export default Routetransit;
